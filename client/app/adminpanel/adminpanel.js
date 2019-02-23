'use strict';

angular.module('roompapaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/adminpanel', {
        template: '<adminpanel></adminpanel>'
      });
  });
