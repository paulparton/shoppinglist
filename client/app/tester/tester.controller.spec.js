'use strict';

describe('Controller: TesterCtrl', function () {

  // load the controller's module
  beforeEach(module('shoprApp'));

  var TesterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TesterCtrl = $controller('TesterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
