var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

var User = require("../models/user")

/* GET home page. */
router.get('/', function(req, res) {
  res.render('signup');
});

router.post('/', function(req, res) {

    bcrypt.hash(req.body.password, 5, function(err, encryptedPassword) {
        if(err) res.end("ERRORROROROROR")
        User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: encryptedPassword
        })
        .then(()=> {
            res.render("SomeOtherPage")
        })
        .catch((err)=> {
            res.end("ERROROROROR", err)
        })
    });
  });

module.exports = router;
