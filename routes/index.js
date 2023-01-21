const express = require('express');

const securityRouter = require('./security.router');
const registersRouter = require('./registers.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/registers',registersRouter);
  router.use('/categories',categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/auth',securityRouter)
}

module.exports = routerApi;
