const express = require('express');

const supertest = require('supertest');

exports.setup = () => {
  const app = require('../src');
  const server = express();
  app(server);

  const request = supertest(process.env.BASE_URL || server);

  return {
    request
  };
};
