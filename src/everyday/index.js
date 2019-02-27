const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

module.exports = (app, options) => {
  app.get('/everyday/:activity', async (req, res) => {
    const activity = req.params.activity;

    const html = await readFileAsync(path.join(__dirname, 'app.html'));

    const result = html.toString()
      .replace(/{{ activity }}/g, activity)

    res.send(result);
  });
};
