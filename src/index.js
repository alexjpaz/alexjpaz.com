const express = require('express')
const app = express()
var proxy = require('express-http-proxy');

app.get('/hello', function (req, res) {
  res.send('Hello World!')
})

app.get('/wishlist', (req, res) => {
  res.redirect('https://www.amazon.com/gp/registry/wishlist/39HDNC1ODLVA4');
});

app.get('*', proxy('https://alexjpaz.github.io/'));

module.exports = app;
