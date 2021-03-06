var fail = require("chai").assert.fail;

const { setup } = require('./common');
const { request } = setup();

describe('and-his-name-is', () => {
  it('should invoke', async () => {
    await request.get('/and-his-name-is/Alex')
      .expect(200, /Alex/);
  })

  it('should provide the form.html', async () => {
    await request.get('/and-his-name-is')
      .expect(200, /Enter Your Name/);
  })

});
