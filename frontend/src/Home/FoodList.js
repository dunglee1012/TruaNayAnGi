import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodList = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get('/api/foods');
                console.log('Foods:', response.data);
                setFoods(response.data);
            } catch (error) {
                console.error('Error fetching food list:', error);
            }
        };
        fetchFoods();
    }, []);

    return (
        <div>
            <h1>Food List</h1>
            <p>Number of foods: {foods.length}</p>
            <ul>
                {foods.map(food => (
                    <li key={food._id}>{food.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FoodList;