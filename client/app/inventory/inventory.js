'use strict';

angular.module('roompapaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/inventory', {
        template: '<inventory></inventory>'
      });
  });
