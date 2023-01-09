const express = require('express');

const securityRouter = require('./security.router');
const registersRouter = require('./registers.router');
const usersRouter = require('./users.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/registers',registersRouter);
  router.use('/users', usersRouter);
  router.use('/auth',securityRouter)
}

module.exports = routerApi;
