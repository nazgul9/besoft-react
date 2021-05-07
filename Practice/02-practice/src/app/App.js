import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'
import './App.css'

const App = ({ state }) => {
  return (
    <div>

      <h1 className="text-center">Library</h1>

      <div className="container border shadow-sm">
        <div className="row">
          {state.map((item) => (
            <div className="col-4 m-0 p-0" key={item.id}>
                <img src={item.image} alt="" />
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