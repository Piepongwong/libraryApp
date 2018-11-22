var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")
var Book = require("../models/book.js")
var Author = require("../models/author.js")

/* GET users listing. */
router.get('/', function(req, res) {
  Author.find({})
  .then((result)=> {
    res.render('createBook', {layout: "layout", authors: result});
  })
});

router.post("/", function(req,res, next) {
   
  var authorIds = req.body.authors.map((author)=> mongoose.Types.ObjectId(author)) // this is new
  
   Book.create({
        title: req.body.title,
        year: req.body.year,
        author: authorIds 
    })
    .then(()=> {
      Author.find({})
      .then((result)=> {
        res.render('createBook', {layout: "layout", authors: result, bookCreated: true});
      })
    })
    .catch((err)=> {
      next(createError(404));
    })
})

module.exports = router;
