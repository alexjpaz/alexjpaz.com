const express = require('express');

const supertest = require('supertest');

exports.setup = () => {
  const plugin = require('../src');
  const app = express();
  plugin(app);

  const request = supertest(process.env.BASE_URL || server);

  return {
    request
  };
};
