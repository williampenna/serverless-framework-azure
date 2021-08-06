import { expect } from 'chai';
import { Context, HttpRequest } from '@azure/functions';
import sayGoodbye from '../src/handlers/goodbye';

describe('Tests suit - Test to send event hub message.', () => {
  it.only('SUCESS: Should get response successfully.', async () => {
    const context = {} as Context;
    const req = {
        query: {},
        body: {
            name: 'William Penna'
        }
    } as HttpRequest;
    const response = await sayGoodbye(context, req);
    expect(response.message).to.equal('Hello World William Penna!');
  });
});