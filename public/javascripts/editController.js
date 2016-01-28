'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/edit', {
		templateUrl: './views/edit.html',
		controller: 'editController'
	});
}])

.controller('editController', ['$scope', function ($scope) {
	// create a message to display in our view
	$scope.message = '';
}]);

