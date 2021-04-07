import React, { Component } from "react";

class componentName extends Component {
    render() {
        return (
        <div className="col-md-6 m-auto">
            <ul className="list-group">
            {this.props.cart.foods.map((item) => (
                <li className="list-group-item d-flex justify-content-between" key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                </li>
            ))}
            </ul>
            <p className="mt-3 text-right">Total Price: </p>
        </div>
        );
    }
}

export default componentName;
