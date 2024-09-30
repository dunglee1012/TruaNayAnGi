import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/home.css';
import CategoryListDisplay from './CategoryListDisplay';
import FoodListDisplay from './FoodListDisplay';

const Home = () => {
    const [expandedBox, setExpandedBox] = useState(null);
    const [minimizingBox, setMinimizingBox] = useState(null);

    const handleVoteClick = () => {
        setMinimizingBox('find');
        setTimeout(() => {
            setExpandedBox('vote');
        }, 500);
    };

    const handleFindClick = () => {
        setMinimizingBox('vote');
        setTimeout(() => {
            setExpandedBox('find');
        }, 500);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.big-box')) {
            setExpandedBox(null);
            setMinimizingBox(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="home-container">
            <h1>Welcome to the What To Eat</h1>
            <p>I can help you...I Guess?.</p>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="input-group rounded">
                            <input
                                type="search"
                                className="form-control rounded"
                                placeholder="Hungry? Starving? Let search for something delicious shall we :>"
                                aria-label="Search"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">

                    <div className={`col-md-5 ${expandedBox === 'vote' ? 'expanded' : expandedBox ? 'minimized' : ''}`}>
                        <div className="big-box text-center" onClick={handleVoteClick}>
                            <h2>Vote</h2>
                            {expandedBox === 'vote' && (
                                <div className="category-content">
                                    <h3>Categories</h3>
                                    <CategoryListDisplay></CategoryListDisplay>
                                    <FoodListDisplay></FoodListDisplay>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={`col-md-5 ${expandedBox === 'find' ? 'expanded' : expandedBox ? 'minimized' : ''}`}>
                        <div className="big-box text-center" onClick={handleFindClick}>
                            <h2>Find</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
