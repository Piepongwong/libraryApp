var express = require('express');
var router = express.Router();
var Author = require("../models/author.js")

/* GET books with authors page. */
router.get('/', function(req, res, next) {
    Author.find({})
    .then((result)=> {
        res.render('listAuthors', { authors: result });
    })
});

module.exports = router;
