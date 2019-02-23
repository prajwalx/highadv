'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var citylistCtrlStub = {
  index: 'citylistCtrl.index',
  show: 'citylistCtrl.show',
  create: 'citylistCtrl.create',
  update: 'citylistCtrl.update',
  destroy: 'citylistCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var citylistIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './citylist.controller': citylistCtrlStub
});

describe('Citylist API Router:', function() {

  it('should return an express router instance', function() {
    expect(citylistIndex).to.equal(routerStub);
  });

  describe('GET /api/citylists', function() {

    it('should route to citylist.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'citylistCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/citylists/:id', function() {

    it('should route to citylist.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'citylistCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/citylists', function() {

    it('should route to citylist.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'citylistCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/citylists/:id', function() {

    it('should route to citylist.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'citylistCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/citylists/:id', function() {

    it('should route to citylist.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'citylistCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/citylists/:id', function() {

    it('should route to citylist.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'citylistCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
