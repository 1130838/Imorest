'use strict';

angular.module('imorestApp')
  .controller('SearchWidgetCtrl', function ($scope, $http, socket) {
    $scope.title = 'Searching Widget';

    $scope.awesomeRealEstates = [];

    $http.get('/api/real_estates').success(function (awesomeRealEstates) {
      $scope.awesomeRealEstates = awesomeRealEstates;
      $scope.totalRealEstates = awesomeRealEstates.length;
      socket.syncUpdates('real_estate', $scope.awesomeRealEstates);

      console.log('testing ' + awesomeRealEstates[0].search_type);
      //$scope.catFilter=awesomeRealEstates[0].search_type; // not working yet

    });

    $scope.addRealEstate = function () {
      if ($scope.newRealEstate === '') {
        return;
      }
      $http.post('/api/real_estates', {name: $scope.newRealEstate});
      $scope.newRealEstate = '';
    };

    $scope.deleteRealEstate = function (realEstate) {
      $http.delete('/api/real_estates/' + realEstate._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('real_estate');
    });

    //JQUERY ===============================



    $(function () {

      $("#slider").slider(
        {
          value: 100,
          min: 0,
          max: 500,
          step: 1,
          slide: function (event, ui) {
            $("#slider-value").html(ui.value);
          }
        }
      );

      $("#slider-value").html($('#slider').slider('value'));

    })

  });
