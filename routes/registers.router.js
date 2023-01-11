const express = require("express");
const RegistersService = require('../services/registers.service')

const passport = require('passport')
const {validatorHandler} = require('../middlewares/validator.handler')

const {CreateRegistersSchema,EditeRegistersSchema,FineOneRegistersSchema} = require('../schemas/registers.schema')

const router = express.Router();

const service = new RegistersService();

router.get("/", async (req, res) =>{
  const registers = await service.find()
  res.json(registers)
});

router.post("/",
  passport.authenticate('jwt',{session:false}),
  validatorHandler(CreateRegistersSchema,'body'),
  async (req, res,next) =>{
    let body = {...req.body,userId:req.user.sub};
    try {
      const register = await service.create(body)
      res.json(register);
    } catch (error) {
      next(error)
    }
});

router.get("/:id",
  validatorHandler(FineOneRegistersSchema,'params'),
  async (req, res, next) =>{
    let {id} = req.params;
    try {
      const registers = await service.findOne(id)
      res.json(registers)
    } catch (error) {
      next(error)
    }
});

router.put("/:id",
  passport.authenticate('jwt',{session:false}),
  validatorHandler(FineOneRegistersSchema,'params'),
  validatorHandler(EditeRegistersSchema,'body'),
  async (req, res, next) =>{
    let {id} = req.params;
    let data = req.body;

    try {
      const register = await service.update(id,data)
      res.json(register);

    } catch (error) {
      next(error)
    }
});

router.delete("/:id",
  passport.authenticate('jwt',{session:false}),
  async (req, res,next) =>{
  let {id} = req.params;
    try {
      const register = await service.delete(id)
      res.json(register);
    } catch (error) {
      next(error)
    }
});


module.exports = router;
