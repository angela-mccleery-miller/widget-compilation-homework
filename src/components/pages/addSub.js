import React, { Component } from "react";

export default class AddSub extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }
  handleCrementer = (increment) => {
    this.setState({
      count: this.state.count + increment,
    });
  };
  render() {
    return (
      <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
      
        <div className="AppOne">
        <div>
          <h2>{this.state.count}</h2>
          <button onClick={() => this.handleCrementer(1)}>Add</button>
          <button onClick={() => this.handleCrementer(-1)}>Sub</button>
        </div>
      </div>
     </div>
    );
  }
}
