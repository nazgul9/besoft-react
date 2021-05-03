import React from 'react';
import { connect } from 'react-redux'
import {addCount, minusCount, umnoCount, deliCount} from './actions'



const App = ({ count, addCount, minusCount, umnoCount, deliCount}) => {
    return (
        <div>
            <h1 className="h2 mb-3 mt-3 text-center">{count}</h1>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary mr-2 ml-1" onClick={addCount}>+</button>
                <button className="btn btn-primary mr-2" onClick={minusCount}>-</button>
                <button className="btn btn-primary mr-2" onClick={umnoCount}>*2</button>
                <button className="btn btn-primary" onClick={deliCount}>/2</button>
            </div>
        </div>
    );
};

const msp = ({count}) => {
    return { count }
}

export default connect(msp, {addCount, minusCount, umnoCount, deliCount})(App);