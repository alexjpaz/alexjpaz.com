var fail = require("chai").assert.fail;

const supertest = require('supertest');

const app = require('../src');

const request = supertest(process.env.BASE_URL || app);

describe('and-his-name-is', () => {
  it('should invoke', async () => {
    await request.get('/and-his-name-is/Alex')
      .expect(200, /Alex/);
  })
});
