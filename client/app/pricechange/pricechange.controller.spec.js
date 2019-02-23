'use strict';

describe('Component: PricechangeComponent', function () {

  // load the controller's module
  beforeEach(module('roompapaApp'));

  var PricechangeComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PricechangeComponent = $componentController('pricechange', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
