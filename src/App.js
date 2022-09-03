import React from "react";
import Saludo from "./components/Saludo";

function App() {
  return (
    <div className="container mt-5">
    <h1>Proyecto desde cero.</h1>
    <Saludo persona="Ignacio"></Saludo>
    <Saludo persona="Juanito"></Saludo>
    <Saludo persona="Pedrito"></Saludo>

    </div>
  );
}

export default App;
