// const securityRouter = require('./security.router');
const registersRouter = require('./registers.router');

function routerApi(app) {
  //app.use('/security',securityRouter);
  app.use('/registers',registersRouter);
}

module.exports = routerApi;
