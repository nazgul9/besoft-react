import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Munelist extends Component {
    render() {
        return (
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                </tbody>
            </table>
        )
    }
}

export default Munelist;