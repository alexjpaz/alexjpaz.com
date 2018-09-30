var fail = require("chai").assert.fail;

const supertest = require('supertest');

const request = supertest(process.env.BASE_URL || app);

it('should invoke', async () => {
  await request.get('/hello')
    .expect(200, /Hello/);
})
