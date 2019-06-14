const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sever = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe("Tests for Cars, Orders and Flags ", ()=>{
        it('should return index route', (done)=>{
            chai.request(sever)
            .get('/')
            .end((err, res)=>{
                res.should.have.status(200);
            })
            done()
        });
        it('should return all cars', (done)=>{
            chai.request(sever)
            .get('/api/v1/car') 
            .end((err, res)=>{
                res.should.have.status(200);
            })
            done()
        });
        it('should get car by id', (done)=>{
            chai.request(sever)
            .get('/api/v1/car/2')
            .end((err, res)=>{
                res.should.have.status(200);
            })
            done()
        });
        it('should post a new car', (done)=>{
            chai.request(sever)
            .post('/api/v1/car')
            .end((err, res)=>{
                res.should.have.status(200);
            })
            done()
        });
        it('should delete car by id', (done)=>{
            chai.request(sever)
            .delete('/api/v1/car/1')
            .end((err, res)=>{
                res.should.have.status(200);
            })
            done()
        });

    
});

describe('CRUD OPERATIONS', ()=>{
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
    it('should add car to DB', (done) =>{
        chai.request(sever)
            .post('/api/v1/car')
            .send(cars[cars])
            .end((err, res)=>{
                res.should.have.status(200);
            })
            done()
    })

    it('should get unsold cars from DB', (done) =>{
        chai.request(sever)
            .get('/api/v1/car?status=available')
            .end((err, res)=>{
                res.should.have.status(200);
            })
            done()
    })
    it('should get car by id', (done) =>{
        chai.request(sever)
            .get('/api/v1/car/1')
            .end((err, res)=>{
                res.should.have.status(200);
            })
            done()
    })
    it('should throw an error if doesnt meet validations to post flag', (done) =>{
        chai.request(sever)
            .post('/api/v1/flag')
            .send(flags[flags])
            .end((err, res)=>{
                res.should.have.status(400);
            })
            done()
    })
//     it('should post flag', (done) =>{
//         chai.request(sever)
//             .post('/api/v1/flag')
//             .send(flags[flags])
//             .end((err, res)=>{
//                 res.should.have.status(200);
//             })
//             done()
//     })
    
// it('should post an order', (done) =>{
//     chai.request(sever)
//         .post('/api/v1/order')
//         .send(orders[orders])
//         .end((err, res)=>{
//             res.should.have.status(200);
//         })
//         done()
// })
    
})