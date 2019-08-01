const Joi = require('@hapi/joi');
const db = require('../database/dbConfig');

module.exports = {
  addUser: user => {
    return db('users')
      .insert(user)
      .returning('*');
  },
  findUserBy: filter => {
    return db('users')
      .where(filter)
      .first();
  },
  registerSchema: user => {
    const schema = Joi.object().keys({
      first_name: Joi.string()
        .min(2)
        .max(255)
        .required()
        .error(errors => {
          return {
            message:
              'First name is required and must have a minimum of 2 characters.'
          };
        }),
      last_name: Joi.string()
        .min(2)
        .max(255)
        .required()
        .error(errors => {
          return {
            message:
              'Last name is required and must have a minimum of 2 characters.'
          };
        }),
      email: Joi.string()
        .email()
        .max(255)
        .required()
        .error(errors => {
          return {
            message: 'Email is required and must be a valid email address.'
          };
        }),
      password: Joi.string()
        .required()
        .min(5)
        .max(255)
        .error(errors => {
          return {
            message:
              'Password is required and must have a minimum of 5 characters.'
          };
        })
    });

    return Joi.validate(user, schema);
  },
  loginSchema: user => {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email()
        .max(255)
        .required()
        .error(errors => {
          return {
            message: 'Email is required and must be a valid email address.'
          };
        }),
      password: Joi.string()
        .required()
        .min(5)
        .max(255)
        .error(errors => {
          return {
            message:
              'Password is required and must have a minimum of 5 characters.'
          };
        })
    });

    return Joi.validate(user, schema);
  }
};
