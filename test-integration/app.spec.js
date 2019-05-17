var fail = require("chai").assert.fail;

const { setup } = require('./common');
const { request } = setup();

describe('expected endpoints', () => {
  const endpoints = [
    ['/', 200, /Alexander Paz/],
    ['/', 200, /content="Gatsby/],
    ['/teamwork', 302],
    ['/hello', 200, /Hello/],
    ['/wishlist', 302],
    ['/and-his-name-is/foobar', 200, /foobar/],
    ['/dist/and-his-name-is.js', 200, /and-his-name-is/],
    ['/dist/test.js', 200, /TEST/],
    ['/fakefakefake', 404],
    ['/dist/'+Math.random().toString()+'/does-not-exist', 404, /Cannot GET/]
  ].forEach((endpoint) => {
    const url = endpoint[0];
    const statusCode = endpoint[1];
    const resultMatch = endpoint[2];
    const method = 'get'
    it(`${method} ${url} = ${statusCode} ${resultMatch || ''}`, async () => {
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
