const Joi = require('@hapi/joi');
const db = require('../database/dbConfig');

module.exports = {
  getAllBooks: () => {
    return db('books');
    // const books = await db('books AS bk')
    //   .select('*')
    //   .count('rv.ratings AS no_of_reviews')
    //   .sum('rv.ratings AS sum')
    //   .leftJoin('reviews AS rv', 'bk.id', 'rv.book_id')
    //   .groupBy('bk.id', 'rv.id').catch((err) => {
    //     console.log(err.message)
    //   });

    // return books.map(book => ({
    //   ...book,
    //   avgRating: parseInt(book.sum/book.no_of_reviews, 10),
    // }))
  },
  getBookReviews: id => {
    return db('reviews').where('book_id', id);
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
