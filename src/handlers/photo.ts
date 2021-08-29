import { AzureFunction, Context, HttpRequest } from "@azure/functions";


const sayHello: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    try {
      console.log('Typescript HTTP trigger function processed a request.');
      context.res = {
        // status: 200, /* Defaults to 200 */
        body: `Goodbye ${(req.query.name || req.body.name)}`,
      };
    } catch (error) {
      context.res = {
        status: 400,
        body: JSON.stringify({ message: 'Falha ao resgatar a URL da foto.'}),
      };
    }
  }