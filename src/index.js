import React from "react";
import ReactDOM from "react-dom";
import House from "./House";

import "./styles.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let roofColor = prompt("Enter roof color ?");
    let doorColor = prompt("Enter door color ?");

    let house = this.state.house;

    house.push({
      roofColor,
      doorColor
    });

    this.setState({ house: [...this.state.house, house] });
  }

  render() {
    let house = this.state.house;
    return (
      <div className="App">
        <button className="button" onClick={this.handleClick}>
          Build new house
        </button>
        {house.map(house => (
          <House roofColor={house.roofColor} doorColor={house.doorColor} />
        ))}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
