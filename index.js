const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  res.send('Hello World!')
})

exports.handler = serverless(app);
