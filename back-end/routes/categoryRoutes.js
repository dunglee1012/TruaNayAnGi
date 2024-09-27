const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find().populate('foods');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;