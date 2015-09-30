'use strict';

angular.module('imorestApp')
  .controller('WidgetCtrl', function ($scope, $http, socket) {
    $scope.title = 'Searching Widget';

    $scope.lower_price_bound = 0;
    $scope.upper_price_bound = 200000;
    $scope.lower_area_bound = 0;
    $scope.upper_area_bound = 250;

    $scope.awesomeRealEstates = [];
    // $scope.awesomeRealEstates[0].search_type = "for_sale";
    $scope.isCollapsed = true;


    $http.get('/api/real_estates').success(function (awesomeRealEstates) {
      $scope.awesomeRealEstates = awesomeRealEstates;
      $scope.totalRealEstates = awesomeRealEstates.length;

      $scope.predicate = 'search_type';
      $scope.clearFilter = function () {
        console.log("xxx");
        $scope.query = [];
      };

      socket.syncUpdates('real_estate', $scope.awesomeRealEstates);
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

    // price slider filter
    $scope.priceRange = function (item) {
      return (parseInt(item['price']) >= $scope.lower_price_bound && parseInt(item['price']) <= $scope.upper_price_bound);
    };
    // area slider filter
    $scope.areaRange = function (item) {
      return (parseInt(item['area']) >= $scope.lower_area_bound && parseInt(item['area']) <= $scope.upper_area_bound);
    };

    // jquery plugin init
    $(function () {
      // your jquery goes here
      var options = [
        {selector: '.class', offset: 200, callback: 'globalFunction()'},
        {selector: '.other-class', offset: 200, callback: 'globalFunction()'},
      ];
      Materialize.scrollFire(options);


      // Materialize.toast(message, displayLength, className, completeCallback);
      Materialize.toast('Loading results.. ', 2000); // 2000 is the duration of the toast

   /*   $('select').material_select();
      $('select').material_select('destroy');*/
    });

  });

angular.module('imorestApp')
  .filter('unique', function () {

    return function (items, filterOn) {

      if (filterOn === false) {
        return items;
      }

      if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
        var hashCheck = {}, newItems = [];

        var extractValueToCompare = function (item) {
          if (angular.isObject(item) && angular.isString(filterOn)) {
            return item[filterOn];
          } else {
            return item;
          }
        };

        angular.forEach(items, function (item) {
          var valueToCheck, isDuplicate = false;

          for (var i = 0; i < newItems.length; i++) {
            if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            newItems.push(item);
          }

        });
        items = newItems;
      }
      return items;
    };
  });
