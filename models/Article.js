//models/Article.js

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({

    author: {
        type: String,
        required: true
    },
    title: {
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
    publisher: {
        type: String,
        required: true
    },
    eprint: {
        type: String,
        required: true
    },
    eprinttype: {
        type: String,
        required: true
    },
    eprintclass: {
        type: String,
        required: true
    },
    annote: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
});

module.exports = Article = mongoose.model('article', ArticleSchema);