import React from 'react' 

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {anteriorPokemonAccion, getPokemonesAccion, siguientePokeAccion} from '../redux/pokeDucks'

const Pokemones = () => {

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch();

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
    
    console.log(pokemones);

    return (
        <div className="row">
            <div className="col-md-6">
                <h3>Lista de Pokemones</h3>
                <br/>
                <div className="d-flex justify-content-between">
                    {
                        pokemones.length === 0 && <button className="btn btn-dark" onClick={() => dispatch(getPokemonesAccion())}>Get Pokemones</button>
                    }
                    {
                        next && <button className="btn btn-dark" onClick={() => dispatch(siguientePokeAccion())} >Siguiente</button>
                    }
                    {
                        previous && <button className="btn btn-dark" onClick={() => dispatch(anteriorPokemonAccion())} >Anterior</button>
                    } 
                </div>

                <ul className="list-group mt-3">
                    {
                        pokemones.map(item => (
                            <li className="list-group-item text-uppercase" key={item.name}>
                                {item.name}
                                <button className="btn btn-dark btn-sm float-right">Info</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-md-6">
                detalle de un pokemen    
            </div>        
        </div>

    )
}

export default Pokemones
