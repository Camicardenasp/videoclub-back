const mongoose = require("mongoose");

const FilmSchema = new mongoose.Schema({
    title: String,
    year: Number,
    time: Number,
    language: String,
    release: String,
    country: String,
    completed: Boolean
});

module.exports = mongoose.model("movies", FilmSchema);