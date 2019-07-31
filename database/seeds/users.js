const bcrypt = require('bcryptjs');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          first_name: 'Pat',
          last_name: 'Dylan',
          email: 'pat@gmail.com',
          password: bcrypt.hashSync('password', 12)
        },
        {
          first_name: 'Jane',
          last_name: 'White',
          email: 'jane@gmail.com',
          password: bcrypt.hashSync('password', 12)
        },
        {
          first_name: 'Mike',
          last_name: 'Houston',
          email: 'mike@gmail.com',
          password: bcrypt.hashSync('password', 12)
        },
        {
          first_name: 'Bob',
          last_name: 'Brown',
          email: 'bob@gmail.com',
          password: bcrypt.hashSync('password', 12)
        },
        {
          first_name: 'Pam',
          last_name: 'James',
          email: 'pam@gmail.com',
          password: bcrypt.hashSync('password', 12)
        }
      ]);
    });
};
