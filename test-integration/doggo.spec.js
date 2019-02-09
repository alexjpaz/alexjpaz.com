var fail = require("chai").assert.fail;

const { setup } = require('./common');
const { request } = setup();

describe('/doggo', () => {
  it('should redirect to a doggo', async () => {
    await request.get('/doggo')
      .expect(302);
  })
});
