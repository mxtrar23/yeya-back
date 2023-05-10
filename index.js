const express = require("express");
const routerApi = require("./routes");
const cors = require('cors');
const {errorsHandler,logErrors,boomErrorsHandler,queryErrorHandler} = require('./middlewares/error.handler')
const AuthHandler = require('./middlewares/auth.handler')

const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;

app.use(express.json())

const whitelist = ['http://localhost:3002','http://localhost:80','http://localhost:8080']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'), false);
    }
  }
}

app.use(cors(options));

require('./utils/auth')

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/info",AuthHandler, (req, res) =>{
  res.send("Hola mi server en Express");
  console.log(process.env)
});

routerApi(app)

app.use(logErrors)// log del error
app.use(boomErrorsHandler)//errores de boom
app.use(queryErrorHandler)//errores por query
app.use(errorsHandler)// desencadena error

app.listen(PORT, () =>{
  console.log("My port: " + PORT);
});
