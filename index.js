const serverless = require('serverless-http');
const app = require('./src');

exports.handler = serverless(app);
