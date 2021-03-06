const Category = require ('../models/categories');

module.exports = {
    all: (req, res) => {
        Category.find()
            .then(categories => res.json(categories))
            .catch(err => res.status(500).json(err));
    },
    create: (req, res) => {
        const category = new Category(req.body);
        category.save()
            .then( category => res.status(201).json(category))
            .catch(err => res.status(400).json(err));
    }
};