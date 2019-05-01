const app = require('./');
const assert = require('assert');
const sinon = require('sinon');

const { loadRedirects } = require('./loadRedirects');

describe('redirect', () => {
  let fakeApp;

  beforeEach(() => {
    fakeApp = {
      get: sinon.spy()
    };
    app(fakeApp);
  });

  describe('redirect', () => {
    let redirects = loadRedirects();

    Object.entries(redirects).forEach(([k, v]) => {
      it(`should redirect ${k} ⇒ ${v} `, () => {
        assert(fakeApp.get.calledWith('/wishlist'));
      });
    });
  });
});
