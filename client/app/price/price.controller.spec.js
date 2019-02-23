'use strict';

describe('Component: PriceComponent', function () {

  // load the controller's module
  beforeEach(module('roompapaApp'));

  var PriceComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PriceComponent = $componentController('price', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
