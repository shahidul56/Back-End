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

describe('Users', () => {
  it('Should require authorization', () => {
    return request.get('/api/users/1').expect(401);
  });

  it('Should return an object of a user when the id is passed in the url', () => {
    return request
    .get('/api/users/1')
    .set('Authorization', token)
    .expect(200)
  })

  it('Should return an array of a user books on shelf when the id is passed in the url', () => {
    return request
    .get('/api/users/1/shelf')
    .set('Authorization', token)
    .expect(200)
  })
});
