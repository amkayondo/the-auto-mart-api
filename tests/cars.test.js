const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sever = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe("Cars", ()=>{
        it('should return index route', ()=>{
            chai.request(sever)
            .get('/')
            .end((err, res)=>{
                res.should.have.status(200);
            })
        });
        it('should return all cars', ()=>{
            chai.request(sever)
            .get('/api/v1/car')
            .end((err, res)=>{
                res.should.have.status(200);
            })
        });
        it('should get car by id', ()=>{
            chai.request(sever)
            .get('/api/v1/car/2')
            .end((err, res)=>{
                res.should.have.status(200);
            })
        });
        it('should post a new car', ()=>{
            chai.request(sever)
            .post('/api/v1/car')
            .end((err, res)=>{
                res.should.have.status(200);
            })
        });
        it('should delete car by id', ()=>{
            chai.request(sever)
            .delete('/api/v1/car/1')
            .end((err, res)=>{
                res.should.have.status(200);
            })
        });

    
});