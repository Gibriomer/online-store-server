const mongoose = require('mongoose');

    const CategorySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
    
    }, {collection: 'categories'});

const Category = mongoose.model('category', CategorySchema);

module.exports = Category;