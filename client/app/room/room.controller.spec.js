'use strict';

describe('Component: RoomComponent', function () {

  // load the controller's module
  beforeEach(module('roompapaApp'));

  var RoomComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RoomComponent = $componentController('room', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
