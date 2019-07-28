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
  addBookReview: (review) => {
    return db('reviews')
    .insert(review)
    .returning('*')
  }
};
