'use strict';

angular.module('roompapaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pricechange', {
        template: '<pricechange></pricechange>'
      });
  });
