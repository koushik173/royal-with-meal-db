import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
// import './Header.css'

const Header = () => {
    return (
        <div className='navBar'>
            <nav>
            <Link className='royalRes'>ROYAL RESTROUA</Link>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/menu">Menu</CustomLink>
            <CustomLink to="/special"> Special</CustomLink>
            <CustomLink to ="/events" >Events</CustomLink>
            <CustomLink to="/chefs">Chefs</CustomLink>
            <CustomLink to="/gallery">Gallery</CustomLink>
            <CustomLink >Drop Down</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <Link className='bookAtable'>Book A Table</Link>
            </nav>
        </div>
    );
};

export default Header;