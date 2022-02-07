import React from 'react';
import { Route } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm border mb-3">
            <div className="container">
                <Route className="navbar-brand" href="#">Books</Route>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/Home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/About" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Contacts" className="nav-link">Contacts</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Register" className="nav-link">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;