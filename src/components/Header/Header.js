import React from 'react';
import './Header.css'
/* Header component */
const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <h1 className="header-title">District Managing Committee </h1>
                <p style={{ color: 'yellow' }}>Bangladesh National Portal</p>
                <h3 style={{ color: 'tomato' }}>Per Month Total Budget: $150 Million</h3>
            </div>
        </div>
    );
};

export default Header;