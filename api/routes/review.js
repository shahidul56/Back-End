const Books = require('../../models/books');
const Review = require('../../models/reviews');
const User = require('../../models/users');

module.exports = {
  addReview: async (req, res) => {
    try {
      const { id } = req.params;
      const { review, reviewer, ratings } = req.body;
      const book = await Books.findBookBy(id);
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
      const review = await Review.findReviewById(id);
      review
        ? res.status(200).json(review)
        : res.status(404).json({ error: 'This review does not exist' });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  getUserReviews: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findUserBy({ id });
      if (user) {
        const reviews = await Review.findUsersReviews(id);
        reviews.length > 0
          ? res.status(200).json(reviews)
          : res.status(404).json({ error: 'You have not written any reviews' });
      } else {
        res.status(404).json({ error: 'This user does not exist' });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  editReview: async (req, res) => {
    try {
      const { id } = req.params;
      const review = await Review.findReviewById(id);
      if (review) {
        const [reviewEdit] = await Review.updateReview(id, req.body);
        res.status(200).json(reviewEdit);
      } else {
        res.status(404).json({ error: 'This review does not exist' });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  deleteReview: async (req, res) => {
    try {
      const { id } = req.params;
      const review = await Review.findReviewById(id);
      if (review) {
        const [delReview] = await Review.deleteReview(id);
        res.status(200).json({ deleted_review: delReview });
      } else {
        res.status(404).json({ error: 'This review does not exist' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
