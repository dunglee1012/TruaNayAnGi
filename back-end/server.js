const express = require('express');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const foodRoutes = require('./routes/foodRoutes');
const app = express();
const port = 5000; 
app.use(express.json());

const username = 'dung';
const password = '12345';
const dbname = 'TruaNayAnGi';
const mongoURI = `mongodb+srv://${username}:${password}@what-to-eat.iawoo.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=What-To-Eat`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to MongoDB');

        app.use('/api/foods', foodRoutes);

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Could not connect to MongoDB', err);
    });