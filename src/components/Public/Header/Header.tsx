import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <header>
            <nav>
            <ul>
               <li><NavLink to="/home" style={({isActive}) => ({color : isActive ? "red" : "black"})}>Home</NavLink></li>
               <li><NavLink to="/service" style={({isActive}) => ({color : isActive ? "red" : "black"})}>Service</NavLink></li>
               <li><NavLink to="/contact" style={({isActive}) => ({color : isActive ? "red" : "black"})}>Contact</NavLink></li>
            </ul>
            </nav>
        </header>
    );
};

export default Header;