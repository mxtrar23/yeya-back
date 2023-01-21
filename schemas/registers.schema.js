const Joi = require('joi')

const id = Joi.string().uuid();
const descripcion = Joi.string().min(3);
const value = Joi.number().integer().min(100);
const createdAt = Joi.date();
const categoryId = Joi.string().uuid();
const type = Joi.string().max(1);


const CreateRegistersSchema = Joi.object({
    descripcion : descripcion.required(),
    value : value.required(),
    type : type.required(),
    categoryId : categoryId.required()
})

const EditeRegistersSchema = Joi.object({
  id:id,
  descripcion : descripcion,
  value : value,
  createdAt : createdAt,
  categoryId : categoryId
})


const FineOneRegistersSchema = Joi.object({
  id:id.required()
})


module.exports = {CreateRegistersSchema,EditeRegistersSchema,FineOneRegistersSchema}





