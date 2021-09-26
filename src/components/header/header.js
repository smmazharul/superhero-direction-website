import React from 'react';
import logo from '../../images/logo.png';
import './header.css'


const Header = () => {
    return (
        <div className="header">
            <img src={logo}alt="" />
            <nav>
                <div className="content">
                <h1>UN Assembly for donation few countries</h1>
                <p>The united Nations declear that they will give donation few countries that's why they call the assembly. </p>
                <h2>Total Amount of Donation: 1200 Million USD</h2>
                </div>
            </nav>
        </div>
    );
};

export default Header;
