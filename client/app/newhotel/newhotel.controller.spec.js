'use strict';

describe('Component: NewhotelComponent', function () {

  // load the controller's module
  beforeEach(module('roompapaApp'));

  var NewhotelComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    NewhotelComponent = $componentController('newhotel', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
