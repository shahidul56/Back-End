const Joi = require('@hapi/joi');
const db = require('../database/dbConfig');

module.exports = {
  findReviewById: id => {
    return db('reviews').where({ id });
  },
  findUsersReviews: id => {
    return db('reviews').where('reviewer', id);
  },
  updateReview: (id, review) => {
    return db('reviews')
      .where({ id })
      .update(review)
      .returning('*');
  },
  deleteReview: id => {
    return db('reviews')
      .where({ id })
      .del()
      .returning('*');
  },
  reviewSchema: review => {
    const schema = Joi.object().keys({
      review: Joi.string()
        .min(2)
        .max(255)
        .required(),
      reviewer: Joi.number().required(),
      ratings: Joi.number()
        .required()
        .min(1)
        .max(5)
    });
    return Joi.validate(review, schema);
  }
};
