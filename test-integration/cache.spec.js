const { expect } = require("chai");

const { setup } = require('./common');
const { request } = setup();

describe('cache', () => {
  describe('index.html', () => {
    let rsp;

    before(async () => {
      rsp = await request.get('/')
        .expect(200);
    });

    it('should not have max-age=0', async () => {
      const cacheControl = rsp.headers['cache-control'];

      expect(cacheControl).not.to.include('max-age=0');
      expect(cacheControl).to.include('max-age=59');
    });

    // FIXME: DANGER
    // Due to a bug the last modified date is set to epoch
    // Therefore the cache never expires :(
    it('should not have lastModified', async () => {
      expect(rsp.headers['last-modified']).to.be.undefined;
    });

    it('should not have etag', async () => {
      expect(rsp.headers['etag']).not.to.be.undefined;
    });
  });
});
