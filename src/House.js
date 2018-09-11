import React from "react";
import ReactDOM from "react-dom";
import Door from "./Door";
import Roof from "./Roof";

class House extends React.Component {
  render() {
    return (
      <div className="house">
        <Roof />
        <Door />
      </div>
    );
  }
}

export default House;
