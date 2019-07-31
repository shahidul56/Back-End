const Joi = require('@hapi/joi');
const db = require('../database/dbConfig');

module.exports = {
  findReviewById: id => {
    return db('reviews')
      .where({ id })
      .first();
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
        .required()
        .error(errors => {
          return {
            message: 'Review is required.'
          };
        }),
      reviewer: Joi.number()
        .required()
        .error(errors => {
          return {
            message: 'Reviewer ID is required.'
          };
        }),
      ratings: Joi.number()
        .required()
        .min(1)
        .max(5)
        .error(errors => {
          return {
            errors,
            message: 'Ratings is required and must be between 1 to 5.'
          };
        })
    });
    return Joi.validate(review, schema);
  }
};
