'use strict';

var app = require('../..');
import request from 'supertest';

var newCitylist;

describe('Citylist API:', function() {

  describe('GET /api/citylists', function() {
    var citylists;

    beforeEach(function(done) {
      request(app)
        .get('/api/citylists')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          citylists = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(citylists).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/citylists', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/citylists')
        .send({
          name: 'New Citylist',
          info: 'This is the brand new citylist!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCitylist = res.body;
          done();
        });
    });

    it('should respond with the newly created citylist', function() {
      expect(newCitylist.name).to.equal('New Citylist');
      expect(newCitylist.info).to.equal('This is the brand new citylist!!!');
    });

  });

  describe('GET /api/citylists/:id', function() {
    var citylist;

    beforeEach(function(done) {
      request(app)
        .get('/api/citylists/' + newCitylist._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          citylist = res.body;
          done();
        });
    });

    afterEach(function() {
      citylist = {};
    });

    it('should respond with the requested citylist', function() {
      expect(citylist.name).to.equal('New Citylist');
      expect(citylist.info).to.equal('This is the brand new citylist!!!');
    });

  });

  describe('PUT /api/citylists/:id', function() {
    var updatedCitylist;

    beforeEach(function(done) {
      request(app)
        .put('/api/citylists/' + newCitylist._id)
        .send({
          name: 'Updated Citylist',
          info: 'This is the updated citylist!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCitylist = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCitylist = {};
    });

    it('should respond with the updated citylist', function() {
      expect(updatedCitylist.name).to.equal('Updated Citylist');
      expect(updatedCitylist.info).to.equal('This is the updated citylist!!!');
    });

  });

  describe('DELETE /api/citylists/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/citylists/' + newCitylist._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when citylist does not exist', function(done) {
      request(app)
        .delete('/api/citylists/' + newCitylist._id)
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
