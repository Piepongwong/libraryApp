var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")
var Author = require("../models/author.js")

/* GET users listing. */
router.get('/', function(req, res) {
  res.render("createAuthor")
});

router.post("/", function(req,res, next) {
   Author.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    .then(()=> {
      res.render("createAuthor", {authorCreated: true})
    })
    .catch((err)=> {
      next(createError(404));
    })
})

module.exports = router;
