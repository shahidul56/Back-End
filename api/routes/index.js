const router = require('express').Router();
const validate = require('../../middleware/validate');
const Users = require('../../models/users');
const auth = require('./auth');
const books = require('./books');

router.post('/register', validate(Users.registerSchema), auth.register)
router.post('/login', validate(Users.loginSchema), auth.login)
router.get('/books', books.getBooks)

module.exports = router;