/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';
import app from '../server/index';
import Bcrypt from '../server/helpers/bcrypt';
import Auth from '../server/middleware/auth';

chai.use(chaiHttp);

const email = faker.internet.email();
const userData = {
  first_name: 'kayondo',
  last_name: 'timothy',
  password: '12345678',
  email: `${email}`,
  address: 'kigali, Rwanda',
};
describe('USER', () => {
  const lgData = {
    password: '12345678',
    email: `${email}`,
  };
  const inavlidPassword = {
    password: '1234567s8',
    email: `${email}`,
  };
  it('should signup', () => {
    chai.request(app)
      .post('api/v2/auth/signup')
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.be.eq(201);
      });
  });
  it('should enable user to login', () => {
    chai.request(app)
      .post('api/v2/auth/signin')
      .send(lgData)
      .end((err, res) => {
        expect(res.body).to.be.a('array');
        expect(res.status).to.be.eq(201);
      });
  });
  it('should give an error if password is inavlid', () => {
    chai.request(app)
      .post('api/v2/auth/signin')
      .send(inavlidPassword)
      .end((err, res) => {
        expect(res.status).to.be.eq(400);
      });
  });
  it('should return index message on /', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.be.eq(200);
      });
  });
});

describe('CARS', () => {
  const auth = new Auth();
  const token = auth.createToken({ email: `${email}` });
  const carData = {
    state: 'used',
    price: 500,
    manufacturer: 'Tesla',
    model: 'VB 2019',
    body_type: 'car',
  };
  it('should create a car', () => {
    chai.request(app)
      .post('/api/v2/car')
      .send(carData)
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.status).to.be.eq(200);
        expect(res.body).to.be('array');
      });
  });
});
