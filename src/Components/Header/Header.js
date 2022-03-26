import { logDOM } from '@testing-library/react';
import React from 'react';
import './Header.css';
import logo3 from '../../Logo3.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-info'>
                <img src={logo3} alt="" />
                <span className='head-name'>HeadPhone Hub</span>
            </div>
            <div className='header-manu'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;