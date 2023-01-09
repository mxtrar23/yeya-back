const express = require("express");

const router = express.Router();

router.get("/params/:id", (req, res) =>{
  res.json(req.params)
});

//http://localhost:3000/query?hola=como&estas=yo&muy=bien
router.get("/query", (req, res) =>{
  res.json(req.query)
});

module.exports = router;
