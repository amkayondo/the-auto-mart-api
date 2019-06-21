/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';
import app from '../server/index';
import Bcrypt from '../server/helpers/bcrypt';
import Auth from '../server/middleware/auth';
import Car from '../server/models/car';

chai.use(chaiHttp);

const Email = faker.internet.email();

const userData = {
  first_name: 'kayondo',
  last_name: 'timothy',
  password: '12345678',
  email: `${Email}`,
  address: 'kigali, Rwanda',
};

const lgData = {
  password: '12345678',
  email: `${Email}`,
};
const inavlidPassword = {
  password: '1234567s8',
  email: `${Email}`,
};

describe('USER', () => {
  it('should signup', (done) => {
    chai.request(app)
      .post('/api/v2/auth/signup')
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.be.eq(201);
        done();
      });
  });
  it('should enable user to login', (done) => {
    chai.request(app)
      .post('/api/v2/auth/login')
      .send(lgData)
      .end((err, res) => {
        expect(res.status).to.be.eq(201);
        done();
      });
  });
  it('should give an error if password is inavlid', (done) => {
    chai.request(app)
      .post('/api/v2/auth/login')
      .send(inavlidPassword)
      .end((err, res) => {
        expect(res.status).to.be.eq(400);
        done();
      });
  });
  it('should return index message on /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.be.eq(200);
        done();
      });
  });
});

const auth = new Auth();
const Token = auth.createToken({ email: `${Email}` });

const car = new Car();
const { email } = Token;
const findUser = car.selectUser(email);


describe('CARS', () => {
  const x = findUser;
  const carData = {
    x,
    state: 'used',
    price: 500,
    manufacturer: 'Tesla',
    model: 'VB 2019',
    body_type: 'car',
  };

  it('should create a car', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .send(carData)
      .set('Authorization', `${Token}`)
      .end((err, res) => {
        expect(res.status).to.be.eq(400);
        done();
      });
  });
  it('should all new unsold cars', (done) => {
    chai.request(app)
      .get('/api/v2/car?status=available&state=new')
      .end((err, res) => {
        expect(res.status).to.be.eq(200);
        done();
      });
  });
});
