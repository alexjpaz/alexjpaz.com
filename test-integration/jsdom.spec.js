const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { Script } = require("vm");

const { setup } = require('./common');

const { expect } = require('chai');

let app;
let server;

let baseURL = process.env.BASE_URL || null;

before(async () => {
  if(baseURL !== null) {
    return;
  }

  app = setup().app;

  server = app.listen(0, () => {
    const port = server.address().port;
    baseURL = `http://localhost:${port}`
  });
});

after(async () => {
  if(server) {
    try {
      server.close();
    } catch(e) {
      console.error(e);
    }
  }
});

describe('jsdom', () => {
  it('should load the homepage', async () => {
    const dom = await JSDOM.fromURL(baseURL);

    expect(dom.serialize()).to.contain("Alexander Paz");
  });

  it('test external resources', async () => {
    const dom = await JSDOM.fromURL(`${baseURL}/test`, {
      runScripts: "dangerously",
      resources: "usable"
    });

    expect(dom.serialize()).to.contain("/dist/test.js");

    expect(dom.window.TEST_INLINE_SCRIPT, "should load an inline script").to.be.ok;

    await new Promise((res) => {
      dom.window.addEventListener("load", res);
    });

    expect(dom.window.TEST_EXTERNAL_SCRIPT, "should load an external script (webpack should be run)").to.be.ok;
  });

  describe('html5', () => {
    it('should load test html5', async () => {
      const dom = await JSDOM.fromURL(`${baseURL}/test_html5`, {
        runScripts: "dangerously",
        resources: "usable"
      });

      expect(dom.serialize()).to.contain("/dist/test.js");

      expect(dom.serialize()).to.contain("TEST_HTML5_TITLE");

      await new Promise((res) => {
        dom.window.addEventListener("load", res);
      });

      expect(dom.window.TEST_EXTERNAL_SCRIPT, "should load an external script (webpack should be run)").to.be.ok;

      const nodes = dom.window.document.querySelectorAll('.error');
      expect(nodes).to.have.lengthOf(0);
    });

    it('should display and error for html5', async () => {
      const virtualConsole = new jsdom.VirtualConsole();
      const dom = await JSDOM.fromURL(`${baseURL}/test_html5_bad`, {
        runScripts: "dangerously",
        resources: "usable",
        virtualConsole
      });

      expect(dom.serialize()).to.contain("TEST_HTML5_TITLE");

      await new Promise((res) => {
        dom.window.addEventListener("load", res);
      });

      const nodes = dom.window.document.querySelectorAll('.error');
      expect(nodes).to.have.lengthOf(1);
    });
  });
});
