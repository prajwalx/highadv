'use strict';

var app = require('../..');
import request from 'supertest';

var newPrice;

describe('Price API:', function() {

  describe('GET /api/prices', function() {
    var prices;

    beforeEach(function(done) {
      request(app)
        .get('/api/prices')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          prices = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(prices).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/prices', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/prices')
        .send({
          name: 'New Price',
          info: 'This is the brand new price!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPrice = res.body;
          done();
        });
    });

    it('should respond with the newly created price', function() {
      expect(newPrice.name).to.equal('New Price');
      expect(newPrice.info).to.equal('This is the brand new price!!!');
    });

  });

  describe('GET /api/prices/:id', function() {
    var price;

    beforeEach(function(done) {
      request(app)
        .get('/api/prices/' + newPrice._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          price = res.body;
          done();
        });
    });

    afterEach(function() {
      price = {};
    });

    it('should respond with the requested price', function() {
      expect(price.name).to.equal('New Price');
      expect(price.info).to.equal('This is the brand new price!!!');
    });

  });

  describe('PUT /api/prices/:id', function() {
    var updatedPrice;

    beforeEach(function(done) {
      request(app)
        .put('/api/prices/' + newPrice._id)
        .send({
          name: 'Updated Price',
          info: 'This is the updated price!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPrice = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPrice = {};
    });

    it('should respond with the updated price', function() {
      expect(updatedPrice.name).to.equal('Updated Price');
      expect(updatedPrice.info).to.equal('This is the updated price!!!');
    });

  });

  describe('DELETE /api/prices/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/prices/' + newPrice._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when price does not exist', function(done) {
      request(app)
        .delete('/api/prices/' + newPrice._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
