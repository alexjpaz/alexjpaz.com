const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  res.send('Foo Bar')
})

module.exports = app;
