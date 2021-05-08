import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Detail from '../components/Detail';
import './App.css'

const App = ({ state }) => {
    return (
        <div>

            <Route path="/" exact>
                <div>
                    <h1 className="title text-center mt-2 mb-2">Library</h1>
                </div>
                <div className="container border shadow-sm">
                    <div className="row">
                        {state.map((item) => (
                            <div className="link-react col-4 m-0 p-0" key={item.id}>
                                <Link to={`/item/${item.id}`}>
                                    <img src={item.image} className="h-100 w-100" alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Route>
            <Route path="/item/:id" exact>
                <Detail state={state} />
            </Route>
        </div>
    );
};

const msp = (state) => {
    return { state }
}

export default connect(msp)(App);