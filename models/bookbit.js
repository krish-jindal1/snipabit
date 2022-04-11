const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String
    },
    bitTitle: {
        type: String
    },
    content: {
        type: String
    },
    chapter: {
        type: String
    }
})

module.exports = mongoose.model("Bookbit", bookSchema);