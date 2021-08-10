import { AzureFunction, Context, HttpRequest } from '@azure/functions';
const { EventHubProducerClient } = require("@azure/event-hubs");

const connectionString = "Endpoint=sb://testwillehn.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=chave";
const eventHubName = "goodbye";

async function main() {

  // Create a producer client to send messages to the event hub.
  const producer = new EventHubProducerClient(connectionString, eventHubName);

  // Prepare a batch of three events.
  const batch = await producer.createBatch();
  batch.tryAdd({ body: "First event" });
  batch.tryAdd({ body: "Second event" });
  batch.tryAdd({ body: "Third event" });    

  // Send the batch to the event hub.
  await producer.sendBatch(batch);

  // Close the producer client.
  await producer.close();

  console.log("A batch of three events have been sent to the event hub");
}

const sayHello: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  try {
    console.log('Typescript HTTP trigger function processed a request.');

    if (req.query.name || (req.body?.name)) {
      await main();
      context.res = {
        // status: 200, /* Defaults to 200 */
        body: `Goodbye ${(req.query.name || req.body.name)}`,
      };
    } else {
      context.res = {
        status: 400,
        body: 'Please pass a name on the query string or in the request body',
      };
    }
  } catch (error) {
    context.res = {
      status: 400,
      body: 'Please pass a name on the query string or in the request body',
    };
  }
}

export default sayHello;