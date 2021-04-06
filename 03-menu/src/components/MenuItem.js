import React, { Component } from 'react';

class MenuItem extends Component {

    state = {
        ItemM: <tr><th scope="row">1</th><th>Manty</th><th>300g</th><th>120som</th></tr> 
    }

    render() {
        return (
            this.state.ItemM
        )
    }
}

export default MenuItem;