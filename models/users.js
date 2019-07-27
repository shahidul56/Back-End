const Joi = require('@hapi/joi');
const db = require('../database/dbConfig');

module.exports = {
  addUser: user => {
   return db('users')
      .insert(user)
      .returning('*')
  },
  findUserBy: filter => {
    return db('users').where(filter);
  },
  registerSchema: user => {
    const schema = Joi.object().keys({
      first_name: Joi.string()
        .min(2)
        .max(255)
        .required(),
      last_name: Joi.string()
        .min(2)
        .max(255)
        .required(),
      email: Joi.string()
        .email()
        .max(255)
        .required(),
      password: Joi.string()
        .required()
        .min(5)
        .max(255)
    });

    return Joi.validate(user, schema);
  },
  loginSchema: user => {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email()
        .max(255)
        .required(),
      password: Joi.string()
        .required()
        .min(5)
        .max(255)
    });

    return Joi.validate(user, schema);
  }
};
