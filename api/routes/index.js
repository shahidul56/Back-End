const router = require('express').Router();
const validate = require('../../middleware/validate');
const Users = require('../../models/users');
const auth = require('./auth');

router.post('/register', validate(Users.registerSchema), auth.register)

module.exports = router;