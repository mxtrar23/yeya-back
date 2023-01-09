const { Sequelize} = require('sequelize');
const {config} = require('../config/config')

const setupModels = require('../db/models')

const {dbHost,dbPort,dbUser,dbPassword,dbName} = config

const sequelize = new Sequelize(dbName,dbUser,dbPassword,{
  host:dbHost,
  port:dbPort,
  dialect:'mysql'
})

setupModels(sequelize)

// sequelize.sync()

module.exports = sequelize
