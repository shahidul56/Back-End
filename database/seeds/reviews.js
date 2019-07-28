exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('reviews').insert([
        { reviewer: 1, ratings: 3, review: 'Loved the book', book_id: 24 },
        { reviewer: 2, ratings: 4, review: 'Too long, worth the read!', book_id: 17 },
        { reviewer: 3, ratings: 2, review: 'Booooorrrriiiiinnnnggg', book_id: 20 }
      ]);
    });
};
