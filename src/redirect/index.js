const { loadRedirects } = require('./loadRedirects');

module.exports = (app) => {
  let redirects = loadRedirects(); // TODO - sync ugh :/

  Object.keys(redirects).forEach((key) => {
    const url = redirects[key];
    app.get(key, (req, res) => {
      res.redirect(url);
    });
  });
};
