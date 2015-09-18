'use strict';

describe('Controller: SearchWidgetCtrl', function () {

  // load the controller's module
  beforeEach(module('imorestApp'));

  var SearchWidgetCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchWidgetCtrl = $controller('SearchWidgetCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
