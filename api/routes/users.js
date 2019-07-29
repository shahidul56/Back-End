const Users = require('../../models/users');

module.exports = {
  getUsersByID: async (req, res) => {
    try {
      const { id } = req.params;
      const [user] = await Users.findUserBy({ id });
      delete user.password;
      user
        ? res.status(200).json(user)
        : res.status(404).json({ error: 'User not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
