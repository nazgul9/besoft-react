import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <header className="navbar plus-nav navbar-expand-lg navbar-light bg-light shadow-sm border mb-3">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Game News</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/"><span className="">Home</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/About"><span className="">About</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Contacts"><span className="">Contacts</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Register"><span className="">Register</span></NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;