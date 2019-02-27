const express = require('express');

const bootstrap = (app, options) => {
  var proxy = require('express-http-proxy');

  require('./test')(app);

  app.get('/hello', function (req, res) {
    res.send('Hello World!')
  })

  require('./doggo')(app);
  require('./fast')(app);
  require('./and-his-name-is')(app);
  require('./everyday')(app);

  require('./redirect')(app);

  // catch all

  app.use('/', express.static('dist'))
  app.use('/dist', express.static('dist'))
  app.use('/', express.static('public'));

  // ENSURE THIS IS LAST
  app.get([/^((?!dist).)*$/gm], (req, res, next) => {
    res.redirect(307, `https://alexjpaz.github.io${req.originalUrl}`);
  });
};

module.exports = bootstrap;
