import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contacts</NavLink></li>
        </ul>
    );
} 

export default Navigation;