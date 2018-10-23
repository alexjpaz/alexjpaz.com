var fail = require("chai").assert.fail;

const supertest = require('supertest');

const app = require('../src');

const request = supertest(process.env.BASE_URL || app);

describe('/doggo', () => {
  it('should redirect to a doggo', async () => {
    await request.get('/doggo')
      .expect(302);
  })
});
