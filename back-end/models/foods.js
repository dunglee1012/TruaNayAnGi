const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    id: { type: Number},
    name: { type: String},
});

const Food = mongoose.model('food', foodSchema);

module.exports = Food;