import { Component } from "react";

const lights = ["red", "green", "yellow"];

export class ClassTrafficLight extends Component {
  state = {
    lightIndex: 0,
  };

  nextState = () => {
    this.setState((prevState) => ({
      lightIndex: (prevState.lightIndex + 1) % lights.length,
    }));
  };

  render() {
    const currentLight = lights[this.state.lightIndex];
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>

        <div className="traffic-light">
          <div
            className={`circle ${currentLight === "red" ? "red" : "black"}`}
          ></div>
          <div
            className={`circle ${
              currentLight === "yellow" ? "yellow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${currentLight === "green" ? "green" : "black"}`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.nextState}>
          Next State
        </button>
      </div>
    );
  }
}
