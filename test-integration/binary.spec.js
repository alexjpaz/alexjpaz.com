const { expect } = require("chai");

const { setup } = require('./common');
const { request } = setup();

const crypto = require('crypto');

describe.only('cache', () => {
  describe('index.html', () => {
    let rsp;

    before(async () => {
      rsp = await request.get('/example.png')
        .expect(200);
    });

    it('expect a correct content type for png file', () => {
      expect(rsp.header['content-type']).to.eql('image/png');
    });

    it('have a non-zero-length file', () => {
      expect(rsp.body.length).not.to.eql(0);
    });

    it('should have the same hash', () => {
      const hash = crypto.createHash('sha1')
        .update(rsp.body)
        .digest('hex');

      expect(hash).to.eql("0c6ab333d7396e984fdd3e50d2eb802f9d929616");
    });
  });
});
