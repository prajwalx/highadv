'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var hotelCtrlStub = {
  index: 'hotelCtrl.index',
  show: 'hotelCtrl.show',
  create: 'hotelCtrl.create',
  update: 'hotelCtrl.update',
  destroy: 'hotelCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var hotelIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './hotel.controller': hotelCtrlStub
});

describe('Hotel API Router:', function() {

  it('should return an express router instance', function() {
    expect(hotelIndex).to.equal(routerStub);
  });

  describe('GET /api/hotels', function() {

    it('should route to hotel.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'hotelCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/hotels/:id', function() {

    it('should route to hotel.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'hotelCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/hotels', function() {

    it('should route to hotel.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'hotelCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/hotels/:id', function() {

    it('should route to hotel.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'hotelCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/hotels/:id', function() {

    it('should route to hotel.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'hotelCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/hotels/:id', function() {

    it('should route to hotel.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'hotelCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
