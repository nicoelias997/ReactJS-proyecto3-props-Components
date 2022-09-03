import React from 'react'

const Imagen = (props) => {
  return (
    <div>
        <img src= {props.urlImagen}alt="imagen aleatoria" className='mr-3'/>
    </div>
  )
}

export default Imagen