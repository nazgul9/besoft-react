import React, { Component } from 'react';

class MenuItem extends Component {

    addCart = () => {
        this.props.addCart(this.props.item.id)
    }

    render() {
        const item = this.props.item
        return (
            <tr>
                <th scope="row">{this.props.index + 1}</th>
                <th>{item.name}</th>
                <th>{item.gram} g</th>
                <th>{item.price} som</th>
                <td>
                    <button onClick={this.addCart} className="btn btn-primary">Add</button>
                </td>
            </tr> 
        )
    }
}

export default MenuItem;