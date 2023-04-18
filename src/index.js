import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Calendar from "./Components/Calendar";

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);