import React from "react";
import ReactDOM from "react-dom";
import Door from "./Door";
import Roof from "./Roof";

class House extends React.Component {
  render(props) {
    return (
      <div className="house">
        <Roof roofColor={this.props.roofColor} />
        <Door doorColor={this.props.doorColor} />
      </div>
    );
  }
}

export default House;
