import React from "react";
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";

function App() {
  return (
    <div className="container mt-5">
    <h1>Proyecto desde cero.</h1>
    <Saludo persona="Ignacio"edad={25}></Saludo>
    <Saludo persona="Juanito"edad={20}></Saludo>
    <Saludo persona="Pedrito" edad={30}></Saludo>
    <hr></hr>
    <h3>Cajita de comentarios</h3>
    <Comentario></Comentario>

    </div>
  );
}

export default App;
