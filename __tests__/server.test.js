'use strict';
//tests anything that has to do with my routes
const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
// const supergoode = require('@code-fellows/supergoose')


describe('web server', () => {

    it('should respond with a 404 on an indvalid method', async () => {
        expect(response.status).toBe(404);
    });

    it('can add a record', async() => {
        return mockRequest.post('/place')
        //.send is sending a json object
        .send({ name: 'ocean' })//this is the object that I am sending to be added to my database 
        .then(results => {
            expect(results.status).toBe(200)
            expect(results.body.name).toEqual('ocean');
        });


    });

//     it('can get a list of records', async() => {

//     });

//     it('can get a record', async () => {

//     });

//     it('can update a record', async () => {

//     });

//     it('can delete a record', async () => {

//     });

});