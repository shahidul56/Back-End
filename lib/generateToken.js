const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_SECRET;

module.exports = function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.first_name,
    email: user.email
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, jwtKey, options);
};
