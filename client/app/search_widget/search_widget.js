'use strict';

angular.module('imorestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search_widget', {
        url: '/search_widget',
        templateUrl: 'app/search_widget/search_widget.html',
        controller: 'SearchWidgetCtrl'
      });
  });