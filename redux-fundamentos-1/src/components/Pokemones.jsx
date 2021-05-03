import React from 'react' 

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {getPokemonesAccion, siguientePokeAccion} from '../redux/pokeDucks'

const Pokemones = () => {

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch();

    const pokemones = useSelector(store => store.pokemones.array)
    console.log(pokemones);

    return (
        <div>
            Lista de Pokemones:
            <button onClick={() => dispatch(getPokemonesAccion())}> Get Pokemones</button>
            <button onClick={() => dispatch(siguientePokeAccion(20))}> Siguiente</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones
