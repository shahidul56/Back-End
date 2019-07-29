const db = require('../database/dbConfig');

module.exports = {
  findReviewById: id => {
    return db('reviews').where({ id });
  },
  findUsersReviews: id => {
    return db('reviews').where('reviewer', id);
  }
};
