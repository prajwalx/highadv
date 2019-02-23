'use strict';

describe('Component: AdminpanelComponent', function () {

  // load the controller's module
  beforeEach(module('roompapaApp'));

  var AdminpanelComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AdminpanelComponent = $componentController('adminpanel', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
