const Books = require('../../models/books');
const Review = require('../../models/reviews');

module.exports = {
  addReview: async (req, res) => {
    try {
      const { id } = req.params;
      const { review, reviewer, ratings } = req.body;
      const [book] = await Books.findBookBy(id);
      if (book) {
        const bookReview = await Books.addBookReview({
          book_id: id,
          review,
          reviewer,
          ratings
        });
        res.status(201).json(bookReview);
      } else {
        res.status(404).json({ error: 'This book does not exist' });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  getReviewById: async (req, res) => {
    try {
      const { id } = req.params;
      const [review] = await Review.findReviewById(id);
      review ? res.status(200).json(review) : res.status(404).json({ error: 'This review does not exist' });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
