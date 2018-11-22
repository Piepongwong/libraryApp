const mongoose = require("mongoose")

var Author = mongoose.model("author", {
    firstname: String,
    lastname: String
})

module.exports = Author