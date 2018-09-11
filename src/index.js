import React from "react";
import ReactDOM from "react-dom";
import House from "./House";

import "./styles.css";
class App extends React.Component {
  render() {
    const color1 = "yellow";
    const color2 = "blue";
    return (
      <div className="App">
        <House roofColor="red" doorColor="yellow" />
        <House roofColor="purple" doorColor="green" />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
