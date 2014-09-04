'use strict';

/**
 * @ngdoc function
 * @name graphemeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the graphemeApp
 */
angular.module('graphemeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
