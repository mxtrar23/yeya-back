const express = require("express");
const routerApi = require("./routes");
const {errorsHandler,logErrors,boomErrorsHandler,queryErrorHandler} = require('./middlewares/error.handler')

const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (req, res) =>{
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
