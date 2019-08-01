require('dotenv').config();

const server = require('../../server');
const request = require('supertest')(server);
let token;

beforeAll(done => {
  request
    .post('/api/login')
    .send({
      email: 'bob@gmail.com',
      password: 'password'
    })

    .end((err, res) => {
      token = res.body.token;
      done();
    });
});

describe('Reviews', () => {
  it('Should require authorization', () => {
    return request.get('/api/user/1/reviews').expect(401);
  });
  it('Should return an array of user reviews when header is set with token', () => {
    return request
      .post('/api/books/2/review')
      .set('Authorization', token)
      .send({
        review: 'Awesome read!',
        reviewer: 1,
        ratings: 5
      })
      .then(res => {
        return request
          .get('/api/user/1/reviews')
          .set('Authorization', token)
          .expect(200);
      });
  });

  it('Should return an object of review when user post a review', () => {
    return request
      .post('/api/books/2/review')
      .set('Authorization', token)
      .send({
        review: 'Awesome read!',
        reviewer: 2,
        ratings: 5
      })
      .expect(201);
  });

  it('Should return an object of review when user gets a review by ID', () => {
    return request
      .get('/api/reviews/1')
      .set('Authorization', token)
      .expect(200);
  });

  it('Should return an error if the review does not exist', () => {
    return request
      .get('/api/reviews/1000')
      .set('Authorization', token)
      .expect(404);
  });

  it('Should return an object of review when user edits a review', () => {
    return request
      .put('/api/reviews/1')
      .set('Authorization', token)
      .send({
        review: 'Awesome read! Really understood the subject',
        reviewer: 2,
        ratings: 5
      })
      .expect(200);
  });

  it('Should return an object of deleted review when user deletes a review', () => {
    return request
      .delete('/api/reviews/1')
      .set('Authorization', token)
      .expect(200);
  });
});
