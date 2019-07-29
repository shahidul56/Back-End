const Joi = require('@hapi/joi');
const db = require('../database/dbConfig');

module.exports = {
  getAllBooks: () => {
    return db('books');
  },
  getBookReviews: id => {
    return db('reviews').where('book_id', id);
  },
  findBookBy: id => {
    return db('books').where({ id });
  },
  addBookReview: review => {
    return db('reviews')
      .insert(review)
      .returning('*');
  },
  deleteBook: id => {
    return db('books')
      .where({ id })
      .del()
      .returning('*');
  },
  bookSchema: user => {
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

    return Joi.validate(user, schema);
  }
};
