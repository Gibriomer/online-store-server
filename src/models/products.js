const mongoose = require('mongoose');


    const ProductSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        catagoryId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    });

const product = mongoose.model('product', ProductSchema);

module.exports = product;