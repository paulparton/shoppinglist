'use strict';

angular.module('shoprApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tester', {
        templateUrl: 'app/tester/tester.html',
        controller: 'TesterCtrl'
      });
  });
