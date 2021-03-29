import React from "react"; // импортируем библиоткеку
import ReactDOM from "react-dom"; // потом определенную команду из библиотике
import "./style.css";
import App from "./components/App"

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
);
