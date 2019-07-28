const bcrypt = require('bcryptjs');
const generateToken = require('../../lib/generateToken');
const Users = require('../../models/users');

module.exports = {
  register: async (req, res) => {
    try {
      let user = req.body;
      user.password = bcrypt.hashSync(req.body.password, 12);

      const [newUser] = await Users.addUser(user);

      delete newUser.password;

      const token = generateToken(newUser);
      res.status(201).json({ user: newUser, token });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const [loggedUser] = await Users.findUserBy({ email });
      if (loggedUser && bcrypt.compareSync(password, loggedUser.password)) {
        delete loggedUser.password;

        const token = generateToken(loggedUser);

        res.status(200).json({ user: loggedUser, token });
      } else {
        res.status(401).json({ message: 'Unauthorized! Please register' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Cannot login', error: error.message });
    }
  }
};
