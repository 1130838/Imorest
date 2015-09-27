'use strict';

angular.module('imorestApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function () {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', {name: $scope.newThing});
      $scope.newThing = '';
    };

    $scope.deleteThing = function (thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });


// JQUERY CODE ========================================================================================================

    $(function () {
      // your jquery goes here

      var my_banner = document.getElementById("my_banner");
      var my_row = document.getElementById("my_row");

      $(my_row).hide();

      $(my_banner).mouseover(function () {
        console.log('im in');
        $(my_row).slideDown(2000);
      });


      $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

      }); // end of document ready

    });


  });

