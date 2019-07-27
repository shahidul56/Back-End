const db = require('../database/dbConfig');

module.exports = {
  getAllBooks: () => {
    return db('books');
  }
};
