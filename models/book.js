const mongoose = require("mongoose")

var Book = mongoose.model("book", {
    title: String,
    year: String,
    author: [{type: mongoose.Schema.Types.ObjectId, ref: "author"}]
})

module.exports = Book