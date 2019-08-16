const Product = require ('../models/products');

module.exports = {
    all: (req, res) => {
        Product.find()
            .then(products => res.json(products))
            .catch(err => res.status(500).json(err));
    },
    create: (req, res) => {
        const products = new products(req.body);
        products.save()
            .then( products => res.status(201).json(products))
            .catch(err => res.status(400).json(err));
    }
};