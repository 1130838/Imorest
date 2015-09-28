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

      //$scope.catFilter = $scope.awesomeRealEstates[0]; // (define default search_type value for selector)
      //$scope.typeFilter = $scope.awesomeRealEstates[0]; // (define default type value for selector)
      //$scope.addressFilter = $scope.awesomeRealEstates[0]; // (define default adress value for selector)
      //$scope.brokerFilter = $scope.awesomeRealEstates[0]; // (define default broker value for selector)

      // filters

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


    // NoUI SLIDER

    /*    var slider = document.getElementById('slider');

     noUiSlider.create(slider, {
     start: [20, 80],
     connect: true,
     range: {
     'min': 0,
     'max': 100
     }
     });*/


    /*    var skipSlider = document.getElementById('skipstep');

     noUiSlider.create(skipSlider, {
     range: {
     'min': 0,
     '10%': 10,
     '20%': 20,
     '30%': 30,
     // Nope, 40 is no fun.
     '50%': 50,
     '60%': 60,
     '70%': 70,
     // I never liked 80.
     '90%': 90,
     'max': 100
     },
     snap: true,
     start: [20, 90]
     });*/


// your jquery goes here







    /*  var nonLinearStepSlider = document.getElementById('slider-non-linear-step');

     noUiSlider.create(nonLinearStepSlider, {
     start: [ 500, 4000 ],
     range: {
     'min': [     0 ],
     '10%': [   500,  500 ],
     '50%': [  4000, 1000 ],
     'max': [ 10000 ]
     }
     });*/


    /*   var slider = document.getElementById('slider');
     noUiSlider.create(slider, {
     start: [20, 80],
     connect: true,
     step: 1,
     range: {
     'min': 0,
     'max': 100
     },
     format: wNumb({
     decimals: 0
     })
     });*/



    // dropdown settings
 /*   $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'center' // Displays dropdown with edge aligned to the left of button
      }
    );
*/
    // jquery plugin init
    var options = [
      {selector: '.class', offset: 200, callback: 'globalFunction()'},
      {selector: '.other-class', offset: 200, callback: 'globalFunction()'},
    ];
    Materialize.scrollFire(options);


    // price slider filter
    $scope.priceRange = function (item) {
      return (parseInt(item['price']) >= $scope.lower_price_bound && parseInt(item['price']) <= $scope.upper_price_bound);
    };
    // area slider filter
    $scope.areaRange = function (item) {
      return (parseInt(item['area']) >= $scope.lower_area_bound && parseInt(item['area']) <= $scope.upper_area_bound);
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
