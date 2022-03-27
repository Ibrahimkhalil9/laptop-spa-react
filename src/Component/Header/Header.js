import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <h1>Laptop Bazar</h1>
            <nav className='navbar'>
                <li>Home</li>
                <li>Search</li>
                <li>Product</li>
                <li>Service</li>
            </nav>
        </div>

    );
};

export default Header;