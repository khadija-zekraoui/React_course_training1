import React from 'react'

const Imagen = ({urlImagen}) => {
    return (
        <img className="mr-3" src={urlImagen} alt=""/> //direct access to the prop
    )
}

export default Imagen
