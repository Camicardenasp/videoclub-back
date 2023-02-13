const mongoose = require("mongoose");

const FilmSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

module.exports = mongoose.model("movies", FilmSchema);