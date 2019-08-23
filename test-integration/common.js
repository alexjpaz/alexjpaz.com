const express = require('express');

const supertest = require('supertest');

console.log(`BASE_URL=${process.env.BASE_URL}`);

exports.setup = () => {
  const plugin = require('../src');
  const app = express();
  plugin(app);

  const request = supertest(process.env.BASE_URL || app);

  return {
    app,
    request
  };
};
