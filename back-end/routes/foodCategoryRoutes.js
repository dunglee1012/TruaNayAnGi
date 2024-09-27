const express = require('express');
const router = express.Router();
const FoodCategory = require('../models/foodCategory');

// Get all food categories
router.get('/', async (req, res) => {
    try {
        const foodCategories = await FoodCategory.find().populate('category').populate('food');
        res.json(foodCategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;