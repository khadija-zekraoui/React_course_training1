import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0);
   /* const aumentar = () => {
        console.log('Click');
        setContador(contador + 1);
    }*/
    return (
        <>
            <h2>Contador</h2>
            <h3>Nuestro número aumentado: {contador} </h3>
            <h4>
                {
                    contador > 2 ? 'Es mayor a 2' : 'Es menor a 2'
                }
            </h4>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        </>
    )
}

export default Contador
