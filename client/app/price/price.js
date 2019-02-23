'use strict';

angular.module('roompapaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/price', {
        template: '<price></price>'
      });
  });
