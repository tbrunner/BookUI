'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.requests', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './views/bookList.html',
		controller: 'bookListController'
	});
}])

.controller('bookListController', ['$scope', '$http', 'books', function ($scope, $http, books) {
	// create a message to display in our view
	$scope.message = 'Here is a list of all current books. Click a title to see its details and to edit the book.';
	books.getAll();
	$scope.books = books.books;
	//$http.get('/posts').success(function(data){
	//	$scope.ideas = data;
	//});
	
	$scope.saveBook = function(book, changed)
	{
		if(changed)
		{
			var id = book._id;
			var BookName = book.BookName;
			var BookNumber = book.BookNumber;
			
			var MidStartPage = book.MidStartPage;
			var EndStartPage = book.EndStartPage;
			var StretchWords = book.StretchWords;
			var SightWords = book.SightWords;
			var HasIllustrator = book.HasIllustrator;
			var LessonNumber = book.LessonNumber;
			var HasCountryOfOrigin = book.HasCountryOfOrigin;
			var AuthorLoc = book.AuthorLoc;
			var IllustratorLoc = book.IllustratorLoc;
			var TitleLoc = book.TitleLoc;
			var Pages = book.Pages;
			var Glossary = book.Glossary;
			var isReadable = book.isReadable;
			
			var data = {
				_id:id,
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
			books.update(data);
		}
	}
}]);