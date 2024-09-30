const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const foodRoutes = require('./routes/foodRoute');
const categoryRoutes = require('./routes/categoryRoute');

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

const username = 'dung';
const password = '12345';
const dbname = 'TruaNayAnGi';
const appName = 'What-To-Eat';
const mongoURI = `mongodb+srv://${username}:${password}@what-to-eat.iawoo.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=${appName}`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        app.use('/api/foods', foodRoutes);
        app.use('/api/categories', categoryRoutes);

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
            console.log(`API is running on http://localhost:${port}/api/foods`);
            console.log(`API is running on http://localhost:${port}/api/categories`);
        });
    })
    .catch(err => {
        console.error('Could not connect to MongoDB', err);
    });