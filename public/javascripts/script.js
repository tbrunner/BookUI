'use strict';

// create the module
var myApp = angular.module('myApp', ['ngRoute', 'myApp.requests', 'myApp.add', 'myApp.about'])
// configure our routes
	.config([
		'$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.otherwise({ redirectTo: '/' });
			// use the HTML5 History API
			//$locationProvider.html5Mode(true);
		}
	])
	.filter('orderObjectBy', function() {
		return function(input, attribute, direction) {
			if (!angular.isObject(input)) return input;

			var array = [];
			for (var objectKey in input) {
				array.push(input[objectKey]);
			}

			array.sort(function(a, b) {
				a = parseInt(a[attribute]);
				b = parseInt(b[attribute]);
				return direction == 'asc' ? a - b : b - a;
			});
			return array;
		}
	});
	
myApp.factory('books', ['$http', function($http){
  var o = {
	books:[]
  };
  
  o.getAll = function() {
    return $http.get('/books').success(function(data){
      angular.copy(data, o.books);
    });
  };
  
  o.create = function(book) {
	return $http.post('/books', book).success(function(data){
		o.books.push(data);
	});
  };
  
  o.update = function(book) {
	var path = '/books/' + book._id;
	return $http.put(path, book).success(function(data){
		alert(data.StretchWords[0]);
		//alert(data.message);
		//o.books.push(data);
	});
  };
  
  return o;
}]);


