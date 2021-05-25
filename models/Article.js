//models/Article.js
// JavaScript source code, this was taught from Several class mates and Stackoverflow threads
// this is not purely my own code @Sanjeel Nath

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({


    _id: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    SE_Practice: {
        type: String,
        required: true
    },
    Strength_of_claim: 
    {
        type: String,
        required: true
    },
    journal: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    DOI: {
        type: String,
        required: true
    },
});

module.exports = Article = mongoose.model('article', ArticleSchema);