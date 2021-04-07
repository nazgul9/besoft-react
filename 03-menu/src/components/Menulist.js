import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menulist extends Component {
    render() {
        return (
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.menu.map((item, index)=>(
                        <MenuItem addCart = {this.props.addCart} index = {index} key={item.id} item = {item} />
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Menulist;