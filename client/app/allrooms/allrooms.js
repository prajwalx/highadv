'use strict';

angular.module('roompapaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/allrooms', {
        template: '<allrooms></allrooms>'
      });
  });
