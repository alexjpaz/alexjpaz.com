const express = require('express');

const bootstrap = (app, options) => {
  var proxy = require('express-http-proxy');

  app.get('/hello', function (req, res) {
    res.send('Hello World!')
  })

  require('./doggo')(app);
  require('./fast')(app);
  require('./and-his-name-is')(app);

  require('./redirect')(app);

  app.use('/dist', express.static('dist'))

  // ENSURE THIS IS LAST
  app.get('*', proxy('https://alexjpaz.github.io/'));
};

module.exports = bootstrap;
