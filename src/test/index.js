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

  app.get('/test/html5', (req, res) => {
    const html = generateHtml5Page({
      title: "TEST_HTML5_TITLE",
      scriptUrl: "/dist/test.js"
    });

    res.send(html);
  });

  app.get('/test/html5bad', (req, res) => {
    const html = generateHtml5Page({
      title: "TEST_HTML5_TITLE",
      scriptUrl: "/error/404/does_not_exist"
    });

    res.send(html);
  });

};
