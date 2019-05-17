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
  const cacheConfig = {
    //etag: false,
    maxAge: 7,
    lastModified: false
  };

  app.use('/', express.static('dist', cacheConfig));
  app.use('/dist', express.static('dist', cacheConfig));
  app.use('/', express.static('public', cacheConfig));
};

module.exports = bootstrap;
