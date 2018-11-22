var express = require('express');
var router = express.Router();
var Books = require("../models/book.js")

/* GET books with authors page. */
router.get('/', function(req, res, next) {
    Books.find({})
    .populate("author") // this is new!
    .then((result)=> {
        res.render('listBooks', { books: result });
    })
});

module.exports = router;
