const Joi = require('joi');

const id = Joi.string().uuid();
const email = Joi.string().email();
const username = Joi.string()
const password = Joi.string().min(8);
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  username:username.required(),
  role: role.required()
});

const updateUserSchema = Joi.object({
  username:username,
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
