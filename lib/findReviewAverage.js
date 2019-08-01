module.exports = reviews => {
  const sum = reviews
    .map(review => review.ratings)
    .reduce((acc, total) => acc + total, 0);

  return Math.floor(sum / reviews.length);
};
