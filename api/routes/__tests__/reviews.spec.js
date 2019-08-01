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
  db.raw('TRUNCATE TABLE reviews CASCADE');
});

describe('Reviews', () => {
  it('Should require authorization', () => {
    return request.get('/books/1/review').expect(401);
  });
});
