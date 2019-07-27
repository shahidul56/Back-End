const router = require('express').Router();
const validate = require('../../middleware/validate');
const { authenticate } = require('../../middleware/authenticate');
const Users = require('../../models/users');
const auth = require('./auth');
const books = require('./books');

router.post('/register', validate(Users.registerSchema), auth.register);
router.post('/login', validate(Users.loginSchema), auth.login);
router.get('/books', authenticate, books.getBooks);

module.exports = router;
