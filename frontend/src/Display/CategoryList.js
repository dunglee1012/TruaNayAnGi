import React from 'react';

const CategoryList = ({ category }) => {
    if(!category || category.length === 0) {
        return <p>No category found</p>;
    }
    
    return (
        <div>
            <h1>Category List</h1>
            <p>Number of Category: {category.length}</p>
            <ul>
                {category.map(category => (
                    <li key={category._id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;