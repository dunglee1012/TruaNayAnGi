const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String},
});

const Food = mongoose.model('food', foodSchema);

module.exports = Food;