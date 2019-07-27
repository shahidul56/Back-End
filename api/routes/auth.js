const bcrypt = require('bcryptjs');
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
  }
};
