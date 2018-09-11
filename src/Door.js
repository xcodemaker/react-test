import React from "react";
import ReactDOM from "react-dom";

class Door extends React.Component {
  render() {
    return (
      <div
        className="door"
        style={{ backgroundColor: "" + this.props.doorColor + "" }}
      />
    );
  }
}

export default Door;
