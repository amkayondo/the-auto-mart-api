const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sever = require('../index');
const dotenv = require('dotenv');
const should = chai.should();
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);
dotenv.config();



describe('CRUD OPERATIONS', ()=>{
    let token;

    const user_ = {
        	first_name: "kaio",
	        last_name: "sjdbsjd",
	        password: "hellop938",
	        email:"hdjfkayondo@gmial.com"
    }

    const login_data = {
        'email': 'hdjfkayondo@gmail.com',
        'password': "hellop938"
    }

    it('should return 200 when user as signed up', (done)=>{
        chai.request(sever)
            .post('/api/v1/auth/signup')
            .send(user_)
            .end((err, res)=>{
                res.should.have.status(200)
                done();
            })
    })

    it('should return 200 when user logged in', (done)=>{
        chai.request(sever)
            .post('/api/v1/auth/signin')
            .send(login_data)
            .end((err, res)=>{
                res.should.have.status(200)
                res.body.should.have.propert('_token');
                token = res.body.token
                
                done();
            })
        
    })
    
    cars = [
    {
        id : 5,
        owner : 05, 
        created_on: new Date(),
        state : "used", 
        status : "sold",
        price : 300000, 
        manufacturer : "toyota", 
        model : "XFDV 23", 
        body_type : "truck"
    }]
    flags = [
        {
            "car_id": 3,
            "reason": "Has",
            "description": "The car's window is broken which brings in water when it rains"
        }
    ]
    orders = [
        {
    
            "car_id": 2,
	        "price_offered": 2494934

         }
    ]
    it('should add car to DB', (one) =>{
        chai.request(sever)
            .post('/api/v1/car')
            .send(cars[cars])
            .end((err, res)=>{
                res.should.have.status(200);
            })
    })

    it('should get unsold cars from DB', () =>{
        chai.request(sever)
            .get('/api/v1/car?status=available')
            .end((err, res)=>{
                res.should.have.status(200);
            })
    })
    it('should get car by id', () =>{
        chai.request(sever)
            .get('/api/v1/car/1')
            .end((err, res)=>{
                res.should.have.status(200);
            })
    })
    it('should throw an error if doesnt meet validations to post flag', () =>{
        chai.request(sever)
            .post('/api/v1/flag')
            .send(flags[flags])
            .end((err, res)=>{
                res.should.have.status(400);
            })
            
    })
})