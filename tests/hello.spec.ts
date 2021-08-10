import { expect } from 'chai';
import { Context, HttpRequest } from '@azure/functions';
import sayHello from '../src/handlers/hello';

describe('Tests suit - Test to receive event hub message.', () => {
  it.only('SUCESS: Should get response successfully.', async () => {
    const context = {} as Context;
    const req = {
        query: {},
        body: {
            name: 'William Penna'
        }
    } as HttpRequest;
    const response = await sayHello(context, req);
    expect(response.message).to.equal('Hello World William Penna!');
  });
});