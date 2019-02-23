'use strict';

describe('Component: AllroomsComponent', function () {

  // load the controller's module
  beforeEach(module('roompapaApp'));

  var AllroomsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AllroomsComponent = $componentController('allrooms', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
