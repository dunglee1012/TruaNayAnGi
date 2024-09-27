const express = require('express');
const router = express.Router();
const Food = require('../models/food');

// Get all foods
router.get('/', async (req, res) => {
    try {
        const foods = await Food.find().populate('categories');
        res.json(foods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Vote for a food
router.post('/:id/vote', async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        food.votes += 1;
        await food.save();
        res.json(food);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;