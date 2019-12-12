import React, { Component } from "react";
import "./App.css";
import Graph from "./components/Graph/Graph";

class App extends Component {
  max = 100;
  state = {
    data: []
  };

  componentDidMount() {
    this.createInitialData();
  }

  getRandomInt() {
    return Math.floor(Math.random() * this.max);
  }

  createInitialData() {
    let data = [];
    let dataLength = 8;

    for (let i = dataLength; i--; ) {
      data.push(this.getRandomInt());
    }

    this.setState({ data: data });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="Wrapper">
          <h2>Vertical diagram</h2>
          <Graph max={this.max} data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
