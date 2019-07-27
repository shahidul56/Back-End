const bcrypt = require('bcryptjs');
const generateToken = require('../../lib/generateToken');
const Users = require('../../models/users');

module.exports = {
  register: async (req, res) => {
    try {
      let user = req.body;
      user.password = bcrypt.hashSync(req.body.password, 12);

      const newUser = await Users.addUser(user);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const loggedUser = await Users.findUserBy({ email });
      if (
        loggedUser.length > 0 &&
        bcrypt.compareSync(password, loggedUser[0].password)
      ) {
        const token = generateToken(loggedUser[0]);
        res
          .status(200)
          .json({ message: `Welcome ${loggedUser[0].first_name}!`, token });
      } else {
        res.status(401).json({ message: 'Unauthorized! Please register' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Cannot login', error: error.message });
    }
  }
};
