const router = require('express').Router();
const validate = require('../../middleware/validate');
const { authenticate } = require('../../middleware/authenticate');
const Users = require('../../models/users');
const Books = require('../../models/books');
const auth = require('./auth');
const books = require('./books');
const reviews = require('./review');

router.post('/register', validate(Users.registerSchema), auth.register);
router.post('/login', validate(Users.loginSchema), auth.login);
router.get('/books', authenticate, books.getBooks);
router.get('/books/:id', authenticate, books.getBook);
router.post(
  '/books/:id/review',
  validate(Books.bookSchema),
  authenticate,
  reviews.addReview
);
router.delete('/books/:id', authenticate, books.deleteBookById);

module.exports = router;
