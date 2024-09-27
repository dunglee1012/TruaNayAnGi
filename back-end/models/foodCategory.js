const mongoose = require('mongoose');

const foodCategorySchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    food: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true }
});

const FoodCategory = mongoose.model('FoodCategory', foodCategorySchema);

module.exports = FoodCategory;