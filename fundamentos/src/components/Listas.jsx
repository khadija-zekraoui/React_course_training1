import React, {useState} from 'react'

const Listas = () => {

    const estadoInicial = [
        {id:1, texto:'tarea1'},
        {id:2, texto:'tarea2'},
        {id:3, texto:'tarea3'},
        {id:4, texto:'tarea4'},
    ]

    const [lista, setLista] = useState(estadoInicial);
    
    const agregar = () => {
       console.log("Click"); 
      // setLista([{id:5, texto:'tarea 5'}]) rempleza todo el array por el nuevo elemento
       setLista([...estadoInicial, {id:5, texto:'tarea 5'}])
    }

    return (
        <>
            <h1>Listas</h1>
            {
                lista.map((item, index) => (
                    <h4 key={index}>{item.texto}</h4>
                ))
            }
            <button onClick={() => agregar()}>Agregar</button>
        </>
    )
}

export default Listas
