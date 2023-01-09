const { config } = require('./../config/config');


module.exports = {
  development: {
    username: 'root',
    password: '1546',
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'mysql',
    debug:true
  },
  production: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'mysql',
  }
}
