const Joi = require('joi')

const id = Joi.string().uuid();
const descripcion = Joi.string().min(3);
const value = Joi.number().integer().min(100);
const date = Joi.date();
const categoryId = Joi.string().uuid();
const type = Joi.string().max(1);


const CreateRegistersSchema = Joi.object({
    descripcion : descripcion.required(),
    value : value.required(),
    type : type.required(),
    categoryId : categoryId.required(),
    date : date,
})

const EditeRegistersSchema = Joi.object({
  id:id,
  descripcion : descripcion,
  value : value,
  date : date,
  type : type,
  categoryId : categoryId
})


const FineOneRegistersSchema = Joi.object({
  id:id.required()
})


module.exports = {CreateRegistersSchema,EditeRegistersSchema,FineOneRegistersSchema}





