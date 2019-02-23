'use strict';

angular.module('roompapaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newhotel', {
        template: '<newhotel></newhotel>'
      });
  });
