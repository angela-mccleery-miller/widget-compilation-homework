import React, { Component } from "react";


export default class GrowShrink extends Component {
  constructor(props) {
    super();

    this.state = {
      size: 25
    };
  }


  handleCrementer = increment => {
    this.setState({
      size: this.state.size + increment
    });
  };

  render() {
    return (
      <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"}}>

      <div className="AppTwo">
        <div>
          <h2
            style={{
              fontSize: `${this.state.size }`
            }}
          >
            {this.state.size}
          </h2>
          <button onClick={() => this.handleCrementer(5)}>Grow</button>
          <button onClick={() => this.handleCrementer(-5)}>Shrink</button>
        </div>
        <hr />
      </div>
      </div>
    );
  }
}