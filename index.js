const serverless = require('serverless-http');

const express = require('express');

const server = express();

const app = require('./src');

app(server);

exports.handler = serverless(server);
