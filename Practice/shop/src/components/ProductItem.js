import React, { Component } from "react";

class ProductItem extends Component {

    state = {
        cartIn: false
    }

    onCartIn = () => {
        this.setState(
            (state) => {
                return {
                    cartIn: !state.cartIn
                }
            }
        )
    }

    render() {
        let cartClass = "card mt-4 "
        if (this.state.cartIn === true){
            cartClass += "bg-danger"
        } 

        const item = this.props.item;

        return (
            <div className = {cartClass}> 
                <img className="card-img-top" src={item.image} alt=""/>
                <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>
                        {item.description}
                    </p>
                    <button onClick={this.onCartIn} className="btn btn-primary">Add</button>
                </div>
            </div>
        );
    }
}

export default ProductItem;