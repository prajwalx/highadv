'use strict';

angular.module('roompapaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/hotel', {
        template: '<hotel></hotel>'
      });
  });
