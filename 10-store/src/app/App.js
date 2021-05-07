import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Productslist from '../components/Productslist';
import { Route } from 'react-router';
import Detail from '../components/Detail';


const App = () => {
    return (
        <div>
            <div className="container border shadow-sm">
                <Route path="/" exact>
                    <h1 className="text-center mb-2 mt-2">Phone shop</h1>
                    <Productslist />
                </Route>
                <Route path="/item/:itemId" exact>
                    <Detail />
                </Route>
            </div>
        </div>
    );
};

export default App