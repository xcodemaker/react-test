import React from "react";
import ReactDOM from "react-dom";
import House from "./House";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <House />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
