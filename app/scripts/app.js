'use strict';

(function(){
	/**
	 * @ngdoc overview
	 * @name graphemeApp
	 * @description
	 * # graphemeApp
	 *
	 * Main module of the application.
	 */
	var app = angular.module('graphemeApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']);

	// ROUTING ===============================================
	// set our routing for this application
	// each route will pull in a different controller
	// =======================================================
	app.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/portfolio', {
				templateUrl: 'views/portfolio.html',
				controller: 'PortfolioCtrl'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl'
			})
			.when('/contacts', {
				templateUrl: 'views/contacts.html',
				controller: 'ContactsCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
})();

