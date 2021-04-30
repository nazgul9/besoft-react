import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-plus navbar-expand-lg navbar-dark bg-dark shadow-sm mb-3">
            <div className="container">
                <NavLink className="navbar-brand brand-plus" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-hurricane" viewBox="0 0 16 16">
                        <path d="M6.999 2.6A5.5 5.5 0 0 1 15 7.5a.5.5 0 0 0 1 0 6.5 6.5 0 1 0-13 0 5 5 0 0 0 6.001 4.9A5.5 5.5 0 0 1 1 7.5a.5.5 0 0 0-1 0 6.5 6.5 0 1 0 13 0 5 5 0 0 0-6.001-4.9zM10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                    </svg>
                    Game News
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link modern" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link modern" to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link modern" to="/Contacts">Contacts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link modern" to="/Register">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;