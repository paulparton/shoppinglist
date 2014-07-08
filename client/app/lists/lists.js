'use strict';

angular.module('shoprApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/lists', {
        templateUrl: 'app/lists/lists.html',
        controller: 'ListsCtrl'
      });
  });
