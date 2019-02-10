module.exports = (app) => {
  app.get('/test', (req, res) => {
    res.send(`
    <html>
      <script>
        window.TEST_INLINE_SCRIPT = true;
      </script>
      <script src='../dist/test.js'></script>
    </html>
    `);
  });
};
