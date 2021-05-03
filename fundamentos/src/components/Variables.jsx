import React from 'react'

const Variables = () => {
    const saludo = 'Hola desde constante';
    const img = 'https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png';
    return (
        <div>
            <h2>Nuevo Componente {saludo} </h2>
            <img className="img" src={img} alt="react" />
        </div>
    )
}

export default Variables
