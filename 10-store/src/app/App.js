import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'
import './App.css'

const App = ({ state }) => {
    return (
        <div>
            <div className="container border shadow-sm">
                <h1 className="text-center mb-2 mt-2">Phone shop</h1>
                <div className="row">
                    {state.map((item) => (
                        <div key={item.id} className="col-3 mt-2 mb-2 d-flex justify-content-between">
                            <div className="card">
                                <img className="card-img-top card-img-pro" src={item.image} alt="" />
                                <div>
                                    <h2 className="text-center">{item.title}</h2>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const msp = (state) => {
    return { state }
}

export default connect(msp)(App);