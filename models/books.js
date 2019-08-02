const Joi = require('@hapi/joi');
const db = require('../database/dbConfig');

module.exports = {
  getAllBooks: async () => {
    const books = await db('books AS bk')
      .select('bk.*')
      .count('rv.ratings AS no_of_reviews')
      .sum('rv.ratings AS sum_of_reviews')
      .leftJoin('reviews AS rv', 'bk.id', 'rv.book_id')
      .groupBy('bk.id', 'rv.book_id')
      .orderBy('bk.id', 'asc')
      .catch(error => {
        throw new Error(error);
      });

    return books.map(book => ({
      ...book,
      avgRating: parseInt(book.sum_of_reviews / book.no_of_reviews, 10)
    }));
  },
  getBookReviews: id => {
    return db('reviews')
      .where('book_id', id)
      .orderBy('reviews.id', 'desc');
  },
  findBookBy: id => {
    return db('books')
      .where({ id })
      .first();
  },
  addBook: book => {
    return db('books')
      .insert(book)
      .returning('*');
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
            message: 'Ratings is required and must be between 1 to 5.'
          };
        })
    });

    return Joi.validate(user, schema);
  }
};
