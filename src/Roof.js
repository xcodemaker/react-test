import React from "react";
import ReactDOM from "react-dom";

class Roof extends React.Component {
  render() {
    return (
      <div className="roof" style={{ backgroundColor: this.props.roofColor }} />
    );
  }
}

export default Roof;
