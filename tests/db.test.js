/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';
import app from '../server/index';

chai.use(chaiHttp);


describe('DATABASE', () => {
  const email = faker.internet.email();
  const userData = {
    first_name: 'kayondo',
    last_name: 'timothy',
    password: '12345678',
    email: `${email}`,
    address: 'kigali, Rwanda',
  };
  it('should create all database tables', () => {
    chai.request(app)
      .post('/api/v2/signup')
      .send(userData)
      .end((err, res) => {
        expect(res.body).to.be.a('array');
      });
  });
});
