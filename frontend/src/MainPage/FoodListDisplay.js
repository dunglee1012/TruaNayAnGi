import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FoodList from '../Display/FoodList';

const FoodListDisplay = () => {
    const [foods, setFoods] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/foods');
                console.log('Response from /api/foods:', response);
                setFoods(response.data);
            } catch (error) {
                console.error('Error fetching food list:', error);
                setError(error.message);
            }
        };
        fetchFoods();
    }, []);

    return (
        <div>
            {error ? (
                <p>Error: {error}</p>
            ) : foods.length > 0 ? (
                <FoodList foods={foods} />
            ) : (
                <p>No foods available.</p>
            )}
        </div>
    );
};

export default FoodListDisplay;