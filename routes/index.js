var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var Book = mongoose.model('Book');

router.get('/books', function(req, res, next) {
  Book.find(function(err, books){
    if(err){ return next(err); }

    res.json(books);
  });
});

router.post('/books', function(req, res, next) {
  var book = new Book(req.body);

  book.save(function(err, book){
    if(err){ return next(err); }

    res.json(book);
  });
});

router.put('/books/:book', function(req, res) {

	req.book.BookName = req.body.BookName;
	req.book.BookNumber = req.body.BookNumber;
	req.book.MidStartPage = req.body.MidStartPage;
	req.book.EndStartPage = req.body.EndStartPage;
	//req.book.StretchWords = req.body.StretchWords;
	for(i = 0; i < req.body.StretchWords.length; i++)
	{
		req.book.StretchWords[i] = req.body.StretchWords[i];
	}
	req.book.SightWords = req.body.SightWords;
	req.book.HasIllustrator = req.body.HasIllustrator;
	req.book.LessonNumber = req.body.LessonNumber;
	req.book.HasCountryOfOrigin = req.body.HasCountryOfOrigin;
	req.book.AuthorLoc = req.body.AuthorLoc;
	req.book.IllustratorLoc = req.body.IllustratorLoc;
	req.book.TitleLoc = req.body.TitleLoc;
	req.book.Pages = req.body.Pages;
	req.book.Glossary = req.body.Glossary;
	req.book.isReadable = req.body.isReadable;
	
	req.book.save(function(err, book){
		if(err){ return err; }

		res.json(req.book);
	});	
	
});


router.param('book', function(req, res, next, id) {
  var query = Book.findById(id);

  query.exec(function (err, book){
    if (err) { return next(err); }
    if (!book) { return next(new Error('can\'t find book')); }

    req.book = book;
    return next();
  });
});

router.get('/books/:book', function(req, res) {
  res.json(req.book);
});


module.exports = router;
