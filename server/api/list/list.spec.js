'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/lists', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/lists')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

});

describe('GET /api/lists/:id', function() {

  it('should respond with JSON object', function(done) {
    request(app)
      .get('/api/lists')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
  
});

describe('POST /api/lists', function() {

  it('create a new list and respond with a JSON object', function(done) {
    request(app)
      .get('/api/lists')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
  
});

describe('PUT /api/lists', function() {

  it('udpate a list and respond with a JSON object', function(done) {
    request(app)
      .get('/api/lists')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
  
});

describe('DELETE /api/lists', function() {

  it('should delete a list and return true', function(done) {
    request(app)
      .get('/api/lists')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
  
});

