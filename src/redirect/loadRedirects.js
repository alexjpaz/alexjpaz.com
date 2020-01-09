yaml = require('js-yaml');
fs   = require('fs');

let redirects = {};

const loadRedirects = () => {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(require.resolve('./redirects.yaml'), 'utf8'));

    if(!doc) {
      throw new Error("Could not load redirects");
    }
    return doc.redirects;
  } catch (e) {
    throw e;
  }
};

exports.loadRedirects = loadRedirects;
