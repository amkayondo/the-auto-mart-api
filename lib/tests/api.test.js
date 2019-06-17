"use strict";

var assert = require('assert');

var chai = require('chai');

var chaiHttp = require('chai-http');

var sever = require('../index');

var dotenv = require('dotenv');

var should = chai.should();

var jwt = require('jsonwebtoken');

chai.use(chaiHttp);
dotenv.config();
describe('CRUD OPERATIONS', function () {
  var token;
  var user_ = {
    first_name: "kaio",
    last_name: "sjdbsjd",
    password: "hellop938",
    email: "hdjfkayondo@gmial.com"
  };
  var login_data = {
    'email': 'hdjfkayondo@gmail.com',
    'password': "hellop938"
  };
  it('should return 200 when user as signed up', function (done) {
    chai.request(sever).post('/api/v1/auth/signup').send(user_).end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  it('should return 200 when user logged in', function (done) {
    chai.request(sever).post('/api/v1/auth/signin').send(login_data).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.have.propert('_token');
      token = res.body.token;
      done();
    });
  });
  cars = [{
    id: 5,
    owner: 5,
    created_on: new Date(),
    state: "used",
    status: "sold",
    price: 300000,
    manufacturer: "toyota",
    model: "XFDV 23",
    body_type: "truck"
  }];
  flags = [{
    "car_id": 3,
    "reason": "Has",
    "description": "The car's window is broken which brings in water when it rains"
  }];
  orders = [{
    "car_id": 2,
    "price_offered": 2494934
  }];
  it('should add car to DB', function (one) {
    chai.request(sever).post('/api/v1/car').send(cars[cars]).end(function (err, res) {
      res.should.have.status(200);
    });
  });
  it('should get unsold cars from DB', function () {
    chai.request(sever).get('/api/v1/car?status=available').end(function (err, res) {
      res.should.have.status(200);
    });
  });
  it('should get car by id', function () {
    chai.request(sever).get('/api/v1/car/1').end(function (err, res) {
      res.should.have.status(200);
    });
  });
  it('should throw an error if doesnt meet validations to post flag', function () {
    chai.request(sever).post('/api/v1/flag').send(flags[flags]).end(function (err, res) {
      res.should.have.status(400);
    });
  });
});