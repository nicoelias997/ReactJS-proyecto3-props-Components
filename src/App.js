import React from "react";
import Saludo from "./components/Saludo";

function App() {
  return (
    <div className="container mt-5">
    <h1>Proyecto desde cero.</h1>
    <Saludo persona="Ignacio"edad={25}></Saludo>
    <Saludo persona="Juanito"edad={20}></Saludo>
    <Saludo persona="Pedrito" edad={30}></Saludo>

    </div>
  );
}

export default App;
