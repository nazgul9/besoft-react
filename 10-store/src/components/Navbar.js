import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const Navbar = ({cart}) => {
    return (
        <div className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <Link class="navbar-brand" to="/">Shop</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link">
                            Cart
                            <span className="text-light badge bg-primary rounded-circle ml-1">
                                {cart.itemCart.length}
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const msp = ({cart}) => {
    return {cart}
}

export default connect(msp)(Navbar);