import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './app/App';
import About from "../src/components/About"
import Home from "../src/components/Home"
import Contacts from "../src/components/Contacts"
import Register from "../src/components/Register"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>,
    <App />,
    <About></About>,
    <Home/>,
    <Contacts/>,
    <Register/>,

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
