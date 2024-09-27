const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    foods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Food' }]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;