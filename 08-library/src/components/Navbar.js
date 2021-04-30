import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm border mb-3">
            <div className="container">
                <a className="navbar-brand" href="#">Books</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contacts</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;