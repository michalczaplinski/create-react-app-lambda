import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null, state: 0 };
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json =>
        this.setState({ loading: false, msg: json.msg, state: json.state })
      );
  };

  render() {
    const { loading, msg, state } = this.state;

    return (
      <p>
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <button onClick={this.handleClick("async-chuck-norris")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        <br />
        <span>{msg}</span>
        <div>{state}</div>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;
