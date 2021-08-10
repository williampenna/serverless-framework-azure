import { AzureFunction, Context } from '@azure/functions';

const sayGoodbye: AzureFunction = async function (context: Context, eventHubMessages: any) {
  console.log(`Context :: ${context}`);
  console.log(`Event Hub Messages :: ${eventHubMessages}`);
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: `Goodbye ${eventHubMessages}`
  };
};

export default sayGoodbye;