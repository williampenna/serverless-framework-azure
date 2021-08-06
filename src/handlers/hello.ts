import { EventData } from '@azure/event-hubs';
import { AzureFunction, Context } from '@azure/functions';

const sayHello: AzureFunction = async function (context: Context, eventHubMessages: EventData): Promise<void> {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: `Goodbye ${eventHubMessages}`
  };
}

export default sayHello;