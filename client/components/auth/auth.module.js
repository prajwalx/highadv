'use strict';

angular.module('roompapaApp.auth', ['roompapaApp.constants', 'roompapaApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
