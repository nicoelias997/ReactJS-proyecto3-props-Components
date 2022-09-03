import React from "react";
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";

function App() {
  return (
    <div className="container mt-5">
    <h1>Proyecto desde cero.</h1>
    <Saludo persona="Ignacio" edad={25}></Saludo>
    <Saludo persona="Juanito" edad={20}></Saludo>
    <Saludo persona="Pedrito" edad={30}></Saludo>
    <hr></hr>
    <h3>Cajita de comentarios</h3>
    <Comentario 
    urlImagen="https://picsum.photos/64"
    persona="Ignacio"
    texto="alalalalalalala"
    ></Comentario>
    <Comentario 
    urlImagen="https://picsum.photos/64"
    persona="Juanito"
    texto="cicicicici"
    ></Comentario>
    <Comentario 
    urlImagen="https://picsum.photos/64"
    persona="Pedrito"
    texto="bebebebebe"
    ></Comentario>

    </div>
  );
}

export default App;
