import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class Jera extends Component {

  componentWillUnmount = () => {
    console.log("I died")
  }

  render(){
    return (
      <h1 className="mt-5">I'm Chynar</h1>
    )
  }
}

class App extends Component {

  componentDidMount = () => {
    if (this.state.live === true){
      console.log("I was born")
    }
  }
   
  state = {
    live: true,
    update: false,
  }

  componentWillUpdate = () => {
    console.log("I will change")
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("I was change")
  }

  updateApp = () => {
    this.setState(
      {update: true}
    )
  }

  updateLive = () => {
    this.setState((state) => {
      return {
        live: !state.live
      }
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button className="btn btn-secondary"  onClick={this.updateApp}>
            Learn React
          </button>
          {this.state.live && <Jera />}
          <button onClick={this.updateLive} className="mt-3 btn btn-danger">Die</button>
        </header>
      </div>
    );
  }
};

export default App;
