exports.up = function(knex) {
  return knex.schema.createTable('users', user => {
    user.increments();
    user.string('first_name', 255).notNullable();
    user.string('last_name', 255).notNullable();
    user
      .string('email', 255)
      .notNullable()
      .unique();
    user.string('password', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
