const express = require('express')
const server = express();

const app = require('./src');

app(server);

server.listen(3000)
