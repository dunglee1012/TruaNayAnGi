import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryList from '../Display/CategoryList';

const CategoryListDisplay = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/categories');
                console.log('Response from /api/categories:', response);
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div>
            {categories.length > 0 ? (
                <CategoryList category={categories} />
            ) : (
                <p>No categories available.</p>
            )}
        </div>
    );
};

export default CategoryListDisplay;