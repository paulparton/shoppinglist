'use strict';

angular.module('shoprApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tester', {
        templateUrl: 'tester/tester.html',
        controller: 'TesterCtrl'
      });
  });
