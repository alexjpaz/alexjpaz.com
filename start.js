const express = require('express')
const app = express();

const plugin = require('./src');

plugin(app);

app.listen(3000)
