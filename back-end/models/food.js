const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    votes: { type: Number, default: 0 }
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;