import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Productslist from '../components/Productslist';
import { Route } from 'react-router';
import Detail from '../components/Detail';
import Navbar from '../components/Navbar';
import CartPage from '../components/cartPage';


const App = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="container border shadow-sm">
                    <Route path="/" exact>
                        <h1 className="text-center mb-2 mt-2">Phone shop</h1>
                        <Productslist />
                    </Route>
                    <Route path="/item/:itemId" exact>
                        <Detail />
                    </Route>
                    <Route path="/cart" exact>
                        <CartPage />
                    </Route>
                </div>
            </main>
        </div>
    );
};

export default App