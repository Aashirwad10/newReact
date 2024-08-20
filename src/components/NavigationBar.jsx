import React from 'react';
import '../styles/NavigationBar.css';

import logo from '../assets/logo.png';

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <div className="nav-logo">
                <img src={logo} alt="Taste Nepal Logo" className="logo-image" />
                <h2>Taste Nepal</h2>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    Recipes
                    <ul className="sub-nav-items">
                        <li className="sub-nav-item">Breakfast</li>
                        <li className="sub-nav-item">Lunch</li>
                        <li className="sub-nav-item">Dinner</li>
                    </ul>
                </li>
                <li className="nav-item">
                    Meal Planning
                    <ul className="sub-nav-items">
                        <li className="sub-nav-item">Weekly Plan</li>
                        <li className="sub-nav-item">Grocery List</li>
                    </ul>
                </li>
                <li className="nav-item">
                    Saved Recipes
                    <ul className="sub-nav-items">
                        <li className="sub-nav-item">Favorites</li>
                        <li className="sub-nav-item">Recently Added</li>
                    </ul>
                </li>
                <li className="nav-item">
                    About Us
                    <ul className="sub-nav-items">
                        <li className="sub-nav-item">Our Story</li>
                        <li className="sub-nav-item">Contact</li>
                    </ul>
                </li>
            </ul>
            <div className="nav-footer">
                <button className="nav-button">Sign Up / Log In</button>
            </div>
        </div>
    );
};

export default NavigationBar;