const mongoose = require("mongoose")

var User = mongoose.model("user", {
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

module.exports = User