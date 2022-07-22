 //During the test the env variable is set to test
process.env.NODE_ENV = 'test';

 // Import libraries
 const chai = require('chai');
 const chaiHttp = require('chai-http');
 const should = chai.should();
 var mongoose = require("mongoose");

 // Import server
 var server = require('../index');


var User = require('../models/user');
var Category = require('../models/category');

chai.use(chaiHttp);

describe('Chimoney Blog API', () => {

    it('should Register user, login user', function(done) {
        chai.request(server)

            // register request
            .post('/auth/register')

            // send user registration details
            .send({
                    'name': 'Daniel',
                    'email': 'deedtesdcster@gmail.com',
                    'password': 'tester'
                }

            )  
            .end((err, res) => { // when we get a resonse from the endpoint

                // in other words,
                // the res object should have a status of 201
                res.should.have.status(201);
                // console.log(res)

                // follow up with login
                chai.request(server)
                    .post('/auth/login')
                    // send user login details
                    .send({
                        'email': 'deedtesdcster@gmail.com',
                        'password': 'tester'
                    })
                    .end((err, res) => {
                        console.log('this runs the login part');
                        res.body.should.have.property('token');
                        var token = res.body.token;

                        done()
                    })
            })
    })

    it('should Login user, and create category', function(done) {
        chai.request(server)
            .post('/auth/login')
            // send user login details
            .send({
                'email': 'deedtesdcster@gmail.com',
                'password': 'tester',
                'role': 'admin'
            })
            .end((err, res) => {
                res.body.should.have.property('token');
                var token = res.body.token;

                chai.request(server)
                .get('/api/categories')

                .end(function(err, res) {
                    chai.request(server)
                        .post('/api/categories')

                        .set('accept', 'application/json')
                        .set('Authorization', 'Bearer ' + token)
                        .set('Content-Type', 'application/json')
                        // we set the auth header with our token

                        // send title
                        .send({"title": "WEB4"})

                        .end(function(error, response) {
                            response.should.have.status(201);
                            response.body.should.have.property('message');
                            response.body.message.should.equal('Item successfully created');
                        });
                })
                done()
            })
    })
})



// follow up with requesting user protected page
// chai.request(server)
// .get('/api/categories')
// .end(function(err, res) {
//     chai.request(server)
//         .post('/categories', {
//             "title" : "WEB4"
//         })

//         // we set the auth header with our token
//         .set('Authorization', 'Bearer ' + token)
//         .end(function(error, response) {
//             response.should.have.status(201);
//             response.body.should.have.property('message');
//             response.body.message.should.equal('Item successfully created');
//             done();
//         });
// })