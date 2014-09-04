'use strict';

/**
 * @ngdoc function
 * @name graphemeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the graphemeApp
 */
angular.module('graphemeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
