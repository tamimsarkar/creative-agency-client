import React from 'react';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import Navbar from './Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <HeaderMiddle />
        </div>
    );
};

export default Header;