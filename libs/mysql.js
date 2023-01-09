const mysql = require('mysql2');

const {config} = require('../config/config')

// async function ConnectionDB () {
  const {dbHost,dbPort,dbUser,dbPassword,dbName} = config

  const poolConex = mysql.createPool({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database : dbName
  });

//   return connection
// }
// host: "localhost",
// port:"3306",
// user: "hapegild_yeya",
// password: "Ar83y4r83y",
// database : 'hapegild_yeya'

module.exports = poolConex


