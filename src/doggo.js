exports.register = (app) => {
  app.get('/doggo', (req, res) => {
    res.send(`
    <p>lol</p>
    `);
  });
};
