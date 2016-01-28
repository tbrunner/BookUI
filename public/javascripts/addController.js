'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.add', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/add', {
		templateUrl: './views/add.html',
		controller: 'addController'
	});
}])

.controller('addController', ['$scope', '$http','books', function ($scope, $http, books) {
	// create a message to display in our view
	$scope.submit = function() {
		var BookName = $scope.BookName;
		var BookNumber = $scope.BookNumber;
		
		var MidStartPage = $scope.MidStartPage;
		var EndStartPage = $scope.EndStartPage;
		var StretchWords = $scope.StretchWords;
		var SightWords = $scope.SightWords;
		var HasIllustrator = $scope.HasIllustrator;
		var LessonNumber = $scope.LessonNumber;
		var HasCountryOfOrigin = $scope.HasCountryOfOrigin;
		var AuthorLoc = $scope.AuthorLoc;
		var IllustratorLoc = $scope.IllustratorLoc;
		var TitleLoc = $scope.TitleLoc;
		var Pages = $scope.Pages;
		var Glossary = $scope.Glossary;
		var isReadable = $scope.isReadable;
		
		var data = {
			BookName: BookName,
			BookNumber: BookNumber,
			MidStartPage:MidStartPage,
			EndStartPage:EndStartPage,
			StretchWords:StretchWords,
			SightWords:SightWords,
			HasIllustrator:HasIllustrator,
			LessonNumber:LessonNumber, 
			HasCountryOfOrigin:HasCountryOfOrigin,
			AuthorLoc:AuthorLoc,
			IllustratorLoc:IllustratorLoc, 
			TitleLoc:TitleLoc,
			Pages:Pages,
			Glossary:Glossary, 
			isReadable:isReadable, 
			
		};
		books.create(data);
		
		$scope.BookName = "";
		$scope.BookNumber = "";
		$scope.MidStartPage = "";
		$scope.EndStartPage = "";
		$scope.StretchWords = "";
		$scope.SightWords = "";
		$scope.HasIllustrator = "";
		$scope.LessonNumber = "";
		$scope.HasCountryOfOrigin = "";
		$scope.AuthorLoc = "";
		$scope.IllustratorLoc = "";
		$scope.TitleLoc = "";
		$scope.Pages = "";
		$scope.Glossary = "";
		$scope.isReadable = "";
		alert("Book Submitted");
		
	};
}]);
