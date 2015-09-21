'use strict';

angular.module('imorestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('widget', {
        url: '/widget',
        templateUrl: 'app/widget/widget.html',
        controller: 'WidgetCtrl'
      });
  });
