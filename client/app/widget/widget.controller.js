'use strict';

angular.module('imorestApp')
  .controller('WidgetCtrl', function ($scope, $http, socket) {
    $scope.title = 'Searching Widget';

    // new things

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

      $scope.catFilter = $scope.awesomeRealEstates[0]; // (define default search_type value for selector)
      $scope.typeFilter = $scope.awesomeRealEstates[0]; // (define default type value for selector)
      $scope.addressFilter = $scope.awesomeRealEstates[0]; // (define default adress value for selector)
      $scope.brokerFilter = $scope.awesomeRealEstates[0]; // (define default broker value for selector)


      socket.syncUpdates('real_estate', $scope.awesomeRealEstates);
    });

    //$scope.awesomeRealEstates.search_type = "for_sale";

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


    //$scope.items = [{name: "item 1", "min-acceptable-price": "10",
    //  "max-acceptable-price": "50"},
    //  {name: "item 2", "min-acceptable-price": "5",
    //    "max-acceptable-price": "40"},
    //  {name: "item 3", "min-acceptable-price": "15",
    //    "max-acceptable-price": "30"}];

    // price filter
    $scope.priceRange = function (item) {
      return (parseInt(item['price']) >= $scope.lower_price_bound && parseInt(item['price']) <= $scope.upper_price_bound);
    };
    // area filter
    $scope.areaRange = function (item) {
      return (parseInt(item['area']) >= $scope.lower_area_bound && parseInt(item['area']) <= $scope.upper_area_bound);
    };

  });

// search_type filter
angular.module('imorestApp')
  .filter('searchTypeFilter', function () {
    return function (items, searchTypeFilter) {
      var filtered = [];

      for (var i = 0; i < items.length; i++) {
        //console.log('items[i][search_type] = ' + items[i]['search_type']);
        //console.log('searchTypeFilter.search_type' + searchTypeFilter.search_type);
        var item = items[i];
        if ((item['search_type']) == searchTypeFilter.search_type) {
          //console.log('test items[i] = ' + items[i]['search_type'] + 'items.length = ' + items.length);
          //console.log('im in');
          filtered.push(item);
        }
      }
      return filtered;
    };
  });

// type filter
angular.module('imorestApp')
  .filter('myTypeFilter', function () {
    return function (items, myTypeFilter) {
      var filteredByType = [];

      for (var i = 0; i < items.length; i++) {
        //console.log('items[i][type] = ' + items[i]['type']);
        //console.log('myTypeFilter.type' + myTypeFilter.type);
        var item = items[i];
        if ((item['type']) == myTypeFilter.type) {
          //console.log('test items[i] = ' + items[i]['type'] + 'items.length = ' + items.length);
          //console.log('im in');
          filteredByType.push(item);
        }
      }
      return filteredByType;
    };
  });

// address filter
angular.module('imorestApp')
  .filter('myAddressFilter', function () {
    return function (items, myAddressFilter) {
      var filteredByAddress = [];

      for (var i = 0; i < items.length; i++) {
        //console.log('items[i][address] = ' + items[i]['address']);
        //console.log('myAddressFilter.address' + myAddressFilter.address);
        var item = items[i];
        if ((item['address']) == myAddressFilter.address) {
          //console.log('test items[i] = ' + items[i]['address'] + 'items.length = ' + items.length);
          //console.log('im in');
          filteredByAddress.push(item);
        }
      }
      return filteredByAddress;
    };
  });


// type filter
angular.module('imorestApp')
  .filter('myBrokerFilter', function () {
    return function (items, myBrokerFilter) {
      var filteredByBroker = [];

      for (var i = 0; i < items.length; i++) {
        //console.log('items[i][type] = ' + items[i]['type']);
        //console.log('myTypeFilter.type' + myTypeFilter.type);
        var item = items[i];
        if ((item['broker']) == myBrokerFilter.broker) {
          //console.log('test items[i] = ' + items[i]['type'] + 'items.length = ' + items.length);
          //console.log('im in');
          filteredByBroker.push(item);
        }
      }
      return filteredByBroker;
    };
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
