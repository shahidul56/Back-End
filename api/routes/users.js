const Users = require('../../models/users');
const Shelf = require('../../models/shelf');

module.exports = {
  getUsersByID: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Users.findUserBy({ id });

      user
        ? (delete user.password, res.status(200).json(user))
        : res.status(404).json({ error: 'User not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getUserShelf: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Users.findUserBy({ id });
      if (user) {
        const userShelf = await Shelf.getUserShelf(id);

        userShelf.length > 0
          ? res.status(200).json(userShelf)
          : res.status(404).json({ error: 'You have no books saved' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
