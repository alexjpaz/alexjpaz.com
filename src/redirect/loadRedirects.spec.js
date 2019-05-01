const { expect } = require('chai');

const { loadRedirects } = require('./loadRedirects');

describe('redirect', () => {
  describe('loadRedirects', () => {
    it('should load', () => {
      const redirects = loadRedirects();

      expect(Object.keys(redirects)).to.have.lengthOf.above(1);
      expect(redirects['/wishlist']).not.to.be.undefined
    });
  })
});
