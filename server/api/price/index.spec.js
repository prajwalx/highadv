'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var priceCtrlStub = {
  index: 'priceCtrl.index',
  show: 'priceCtrl.show',
  create: 'priceCtrl.create',
  update: 'priceCtrl.update',
  destroy: 'priceCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var priceIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './price.controller': priceCtrlStub
});

describe('Price API Router:', function() {

  it('should return an express router instance', function() {
    expect(priceIndex).to.equal(routerStub);
  });

  describe('GET /api/prices', function() {

    it('should route to price.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'priceCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/prices/:id', function() {

    it('should route to price.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'priceCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/prices', function() {

    it('should route to price.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'priceCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/prices/:id', function() {

    it('should route to price.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'priceCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/prices/:id', function() {

    it('should route to price.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'priceCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/prices/:id', function() {

    it('should route to price.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'priceCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
