'use strict';

describe('Component: HotelComponent', function () {

  // load the controller's module
  beforeEach(module('roompapaApp'));

  var HotelComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    HotelComponent = $componentController('hotel', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
