exports.up = async function(knex) {
  return await knex.schema
    .createTable('reviews', review => {
      review.increments();
      review
        .integer('reviewer')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      review
        .integer('ratings')
        .unsigned()
        .notNullable();
      review.text('review').notNullable();
    })
    .createTable('books', book => {
      book.increments();
      book.string('title', 255).notNullable();
      book.string('author', 255).notNullable();
      book.string('publisher', 255).notNullable();
      book.string('category', 255).notNullable();
      book
        .integer('reviews')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('reviews')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books').dropTableIfExists('reviews');
};
