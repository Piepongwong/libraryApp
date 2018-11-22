var express = require('express');
var router = express.Router();

var User = require("./models/user")

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res) {
    User.find({username: req.body.username})
    .then((result)=> {
        if(result.length === 0) // do something
        bcrypt.compare(req.body.password, result[0].password, function(err, match) {
            // match == true
            res.cookie("loggedIn", "true")
            res.render('profile');

            //  match == false
            res.render("login")
        });
    })
});

module.exports = router;
