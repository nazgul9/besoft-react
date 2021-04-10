import React, { Component } from "react";

class componentName extends Component {

    PriceRM = () => {
        this.setState((state)=>{
            return {
                priceresult: this.props.foods + this.priceresult
            }
        })
    }

    state = {
        priceresult: 0
    }

    DeletFun = () => {
        this.props.deleteItem(this.props.item)
    }

    onFormSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
        <div className="col-md-6 m-auto">
            <ul className="list-group" onSubmit={this.onFormSubmit}>
            {this.props.cart.foods.map((item) => (
                <li className="list-group-item d-flex justify-content-between" key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <button onClick={this.DeletFun} type="submit" className="btn btn-danger">X</button>
                </li>
            ))}
            </ul>
            <p className="mt-3 text-right">Total Price: {this.state.priceresult} </p>
        </div>
        );
    }
}

export default componentName;
