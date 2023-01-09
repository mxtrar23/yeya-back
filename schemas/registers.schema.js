const Joi = require('joi')

const id = Joi.string().uuid();

const descripcion = Joi.string().min(3);

const value = Joi.number().integer().min(100);

const date = Joi.date();


const CreateRegistersSchema = Joi.object({
    descripcion : descripcion.required(),
    value : value.required(),
})



const EditeRegistersSchema = Joi.object({
  id:id,
  descripcion : descripcion,
  value : value,
  date : date,
})


const FineOneRegistersSchema = Joi.object({
  id:id.required()
})


module.exports = {CreateRegistersSchema,EditeRegistersSchema,FineOneRegistersSchema}





