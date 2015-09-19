'use strict';

angular.module('imorestApp')
  .controller('SearchWidgetCtrl', function ($scope, $http, socket) {
    $scope.title = 'Searching Widget';

    $scope.awesomeRealEstates = [];
    $scope.isCollapsed = true;

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


      //$("#inputID").input(
      //  {
      //    value: 100,
      //    min: 0,
      //    max: 500,
      //    step: 1,
      //    slide: function (event, ui) {
      //      $("#badge-value").html(ui.value);
      //    }
      //  }
      //);
      //
      //$("#badge-value").html($('#inputID').slider('value'));



      //var $filters = $("input:radio[name='brand'],input:radio[name=team]").prop('checked', false); // start all checked
      //var $categoryContent = $('#CategoryContent li');
      //$filters.click(function() {
      //  // if any of the checkboxes for brand or team are checked, you want to show LIs containing their value, and you want to hide all the rest.
      //  $categoryContent.hide();
      //  $filters.filter(':checked').each(function(i, el) {
      //    $categoryContent.filter(':contains(' + el.value + ')').show();
      //  });
      //});

      function showProductsPrice(minPrice, maxPrice) {
        $("#products .product").hide().filter(function() {
          var price = parseInt($(this).data("price"), 10); //base decimal (10)
          return price >= minPrice && price <= maxPrice;
        }).show();
      }

      $(function() {
        var options = {
          range: true,
          min: 0,
          max: 500000,
          values: [50000, 100000],
          step:100,
          slide: function(event, ui) {
            var min = ui.values[0],
              max = ui.values[1];

            $("#amount").val("$" + min + " - $" + max);
            showProductsPrice(min, max);
          }
        }, min, max;

        $("#slider-range").slider(options);

        min = $("#slider-range").slider("values", 0);
        max = $("#slider-range").slider("values", 1);

        $("#amount").val("$" + min + " - $" + max);

        showProductsPrice(min, max);
      });



      function showProductsArea(minArea, maxArea) {
        $("#products .product").hide().filter(function() {
          var area = parseInt($(this).data("area"), 10); //base decimal (10)
          return area >= minArea && area <= maxArea;
        }).show();
      }

      $(function() {
        var options = {
          range: true,
          min: 0,
          max: 1000,
          values: [10, 100],
          step:1,
          slide: function(event, ui) {
            var min = ui.values[0],
              max = ui.values[1];

            $("#surface").val(min +" m2 "+ max + " m2");
            showProductsArea(min, max);
          }
        }, min, max;

        $("#slider-range_surface").slider(options);

        min = $("#slider-range_surface").slider("values", 0);
        max = $("#slider-range_surface").slider("values", 1);

        $("#surface").val(min +" m2 "+ max + " m2");

        showProductsArea(min, max);
      });







    })

  });
