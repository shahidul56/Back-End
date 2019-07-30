const db = require('../../../database/dbConfig');
const server = require('../../server');
const request = require('supertest')(server);
let token;

beforeAll(done => {
  request
    .post('/api/register')
    .send({
      first_name: 'Bob',
      last_name: 'Robert',
      email: 'bob@gmail.com',
      password: 'password'
    })
    .then(res => {
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
     db.raw('TRUNCATE TABLE users, books, reviews CASCADE');
});

describe('Books', () => {
  it('Should require authorization', () => {
    return request.get('/api/books').expect(401);
  });

  it('Should return an array of books when header is set with token', () => {
    return request
      .get('/api/books')
      .set('Authorization', token)
      .expect(200);
  });

  it('Should return an object of an individual book when the id is passed in the url', () => {
    return request
    .get('/api/books/1')
    .set('Authorization', token)
    .expect(200)
  })

  it('Should return an error if the book is not available', () => {
    return request
    .get('/api/books/1000')
    .set('Authorization', token)
    .expect(404)
  })

  // it('Should delete the book with that id', () => {
  //   return request
  //   .delete('/api/books/8')
  //   .set('Authorization', token)
  //   .expect(200);
  // })
});
