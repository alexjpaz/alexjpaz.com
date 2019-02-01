var fail = require("chai").assert.fail;

const supertest = require('supertest');

const app = require('../src');

const request = supertest(process.env.BASE_URL || app);

describe('expected endpoints', () => {
  const endpoints = [
    ['/hello', 200, /Hello/],
    ['/wishlist', 302],
    ['/and-his-name-is/foobar', 200, /foobar/]
  ].forEach((endpoint) => {
    const url = endpoint[0];
    const statusCode = endpoint[1];
    const resultMatch = endpoint[2];
    const method = 'get'
    it(`${method} ${url} = ${statusCode} ${resultMatch}`, async () => {
      if(!resultMatch) {
      await request[method](url)
        .expect(statusCode)
      } else {
        await request[method](url)
          .expect(statusCode, resultMatch)
      }
    });
  });
});
