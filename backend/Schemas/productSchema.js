const mongoose = require('mongoose');

const categories = new mongoose.Schema({
    title: String,
    items: {
        type: Array
    }

});

const Categories = new mongoose.model('categorie', categories);

module.exports = Categories;