const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

module.exports = (app, options) => {
  app.get('/and-his-name-is/silence', (req, res) => {
  });

  app.get('/and-his-name-is', async (req, res) => {
    const html = await readFileAsync(path.join(__dirname, 'form.html'));

    const result = html.toString();

    res.send(result);
  });

  app.get('/and-his-name-is/:name', async (req, res) => {
    const name = req.params.name;

    const html = await readFileAsync(path.join(__dirname, 'app.html'));

    const result = html.toString()
      .replace(/{{ name }}/g, name)

    res.send(result);
  });
};
