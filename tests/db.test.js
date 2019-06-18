/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/index';


chai.use(chaiHttp);


describe('DATABASE', () => {
  const userData = {
    first_name: 'kayondo',
    last_name: 'edward',
    password: '12345',
    email: 'kayondo@gmial.com',
    address: 'kigali',
  };
  it('should create all database tables', () => {
    chai.request(app)
      .post('/api/v2/signup')
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
      });
  });
});
