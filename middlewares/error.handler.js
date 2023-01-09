const {ValidationError} = require('sequelize')
const boom = require('@hapi/boom')

function logErrors (err,req,res,next){
  console.log(err);

  next(err)
}


function errorsHandler (err,req,res,next){
  console.log(err);

  res.status(500).json({
    message:err.message,
    stack: err.stack
  })
}

function boomErrorsHandler (err,req,res,next){
  if(err.isBoom){
    const {output} = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)

}

function queryErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    throw boom.conflict(err.errors[0].message)
  }
  next(err)
}

module.exports = {logErrors,errorsHandler,boomErrorsHandler,queryErrorHandler};
