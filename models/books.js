const db = require('../database/dbConfig');

module.exports = {
  getAllBooks: () => {
    return db('books');
  },
  findBookBy: filter => {
    return db('books').where(filter).first();
  }
};
