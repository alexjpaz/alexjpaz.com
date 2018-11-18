const express = require('express')
const app = express()
var proxy = require('express-http-proxy');

app.get('/hello', function (req, res) {
  res.send('Hello World!')
})

require('./doggo')(app);

require('./redirect')(app);

// ENSURE THIS IS LAST
app.get('*', proxy('https://alexjpaz.github.io/'));

module.exports = app;
