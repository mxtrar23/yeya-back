const Joi = require('joi')

const reg_id = Joi.string().uuid();

const reg_descripcion = Joi.string().min(3);

const reg_value = Joi.number().integer().min(100);

const reg_date = Joi.date();


const CreateRegistersSchema = Joi.object({
    reg_descripcion : reg_descripcion.required(),
    reg_value : reg_value.required(),
})



const EditeRegistersSchema = Joi.object({
  reg_id:reg_id,
  reg_descripcion : reg_descripcion,
  reg_value : reg_value,
  reg_date : reg_date,
})


const FineOneRegistersSchema = Joi.object({
  reg_id:reg_id.required()
})


module.exports = {CreateRegistersSchema,EditeRegistersSchema,FineOneRegistersSchema}





