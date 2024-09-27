const express = require('express');
const router = express.Router();
const Food = require('../models/foods');

// Get all foods
router.get('/', async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new food item
router.post('/', async (req, res) => {
    const food = new Food({
        name: req.body.name,
    });
    try {
        const newFood = await food.save();
        res.status(201).json(newFood);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a food item
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedFood = await Food.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedFood) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.json(updatedFood);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a food item
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFood = await Food.findByIdAndDelete(id);
        if (!deletedFood) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.json({ message: 'Food item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;