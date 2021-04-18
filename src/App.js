import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  foo = () => "Vig";
  render() {
    const name = "Manish Kumar";
    const loading = true;
    const showName = false;

    return (
      <div className='App'>
        <h2>App is</h2>
        {loading ? (
          <h1>
            Hello from {showName && name} {this.foo()}, you know that 1-1 is{" "}
            {1 - 1}
          </h1>
        ) : (
          <h4>Loading...</h4>
        )}
      </div>
    );
  }
}

export default App;
