'use strict';

angular.module('roompapaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/room', {
        template: '<room></room>'
      });
  });
