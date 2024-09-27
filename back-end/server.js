const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

const categoryRoutes = require('./routes/categoryRoutes');
const foodRoutes = require('./routes/foodRoutes');
const foodCategoryRoutes = require('./routes/foodCategoryRoutes');

mongoose.connect('mongodb://localhost:27017/food-voting', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/foodCategories', foodCategoryRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});