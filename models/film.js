const mongoose = require("mongoose"); //Create constant database, import mongoose

const FilmSchema = new mongoose.Schema({
    title: String,
    year: Number,
    time: Number,
    language: String,
    release: String,
    country: String,
    completed: Boolean
}); //Create constant database structure

module.exports = mongoose.model("movies", FilmSchema); //Export database model