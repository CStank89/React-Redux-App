import React from "react";
import "./App.css";
import Tacos from "./components/Tacos";

function App() {
  return (
    <div className="App">
      <h1> Random Taco Recipe </h1>
      <img
        src="https://iamnm.com/wp-content/uploads/2016/10/taco.png"
        alt="delicious taco"
      ></img>
      <Tacos />
    </div>
  );
}

export default App;
