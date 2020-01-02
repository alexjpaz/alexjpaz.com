const serverless = require('serverless-http');

const express = require('express');

const app = express();

const plugin = require('./src');

plugin(app, {});

exports.handler = serverless(app, {
  binary: [
    'image/*'
  ]
});
