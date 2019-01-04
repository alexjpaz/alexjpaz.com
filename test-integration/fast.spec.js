const supertest = require('supertest');
const app = require('../src');
const request = supertest(process.env.BASE_URL || app);

describe('/fast', () => {
  it('should display html sanic', async () => {
    await request.get('/fast')
      .expect(200, /html/);
  });

  it('should redirect imageUrl sanic', async () => {
    await request.get('/fast?redirect=true')
      .expect(307);
  });
});
