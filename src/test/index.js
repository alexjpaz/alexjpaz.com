const { generateHtml5Page } = require('../utils');

module.exports = (app) => {
  app.get('/test', (req, res) => {
    res.send(`
    <html>
      <script>
        window.TEST_INLINE_SCRIPT = true;
      </script>
      <script src='./dist/test.js'></script>
    </html>
    `);
  });

  app.get('/test_html5', (req, res) => {
    const html = generateHtml5Page({
      title: "TEST_HTML5_TITLE",
      scriptUrl: "./dist/test.js"
    });

    res.send(html);
  });

  app.get('/test_html5_bad', (req, res) => {
    const html = generateHtml5Page({
      title: "TEST_HTML5_TITLE",
      scriptUrl: "/error/404/does_not_exist"
    });

    res.send(html);
  });

  app.get('/test_html5_external', (req, res) => {
    const html = generateHtml5Page({
      title: "TEST_HTML5_TITLE",
      scriptUrl: "https://alexjpaz.github.io/static/test/test.js"
    });

    res.send(html);

  });

};
