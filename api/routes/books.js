const Books = require('../../models/books');

module.exports = {
  getBooks: async (req, res) => {
    try {
      const books = await Books.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getBook: async (req, res) => {
    try {
      const { id } = req.params;
      const [book] = await Books.findBookBy(id);
      if (book) {
        const reviews = await Books.getBookReviews(id);
        book.reviews = reviews;
      } else {
        res.status(404).json({ error: 'This book does not exist' });
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
