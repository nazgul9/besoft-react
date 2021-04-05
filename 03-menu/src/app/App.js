import React, { Component } from 'react';
import Munelist from '../components/Menulist';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text">Menu</h1>
                <Munelist/>
            </div>
        )
    }
}

export default App;