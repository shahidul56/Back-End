const router = require('express').Router();
const validate = require('../../middleware/validate');
const { authenticate } = require('../../middleware/authenticate');
const Users = require('../../models/users');
const Books = require('../../models/books');
const Review = require('../../models/reviews');
const auth = require('./auth');
const books = require('./books');
const reviews = require('./review');

// Auth
router.post('/register', validate(Users.registerSchema), auth.register);
router.post('/login', validate(Users.loginSchema), auth.login);

// Books
router.get('/books', authenticate, books.getBooks);
router.get('/books/:id', authenticate, books.getBook);
router.post(
  '/books/:id/review',
  validate(Books.bookSchema),
  authenticate,
  reviews.addReview
);
router.delete('/books/:id', authenticate, books.deleteBookById);

// Reviews
router.get('/reviews/:id', authenticate, reviews.getReviewById);
router.get('/user/:id/reviews', authenticate, reviews.getUserReviews);
router.put(
  '/reviews/:id',
  authenticate,
  validate(Review.reviewSchema),
  reviews.editReview
);
router.delete('/reviews/:id', authenticate, reviews.deleteReview);

module.exports = router;
