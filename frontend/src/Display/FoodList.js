import React from 'react';

const FoodList = ({ foods }) => {
    return (
        <ul>
            {foods.map(food => (
                <li key={food.id}>{food.name}</li>
            ))}
        </ul>
    );
};

export default FoodList;