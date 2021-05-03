const axios = require('axios');

//constantes => estado consumido por los componentes
const dataInicial = {
    array : [],
    offset : 0
}

//types
const GET_POKE_SUCCESS = 'GET_POKE_SUCCESS'
const GET_POKE_NEXT_SUCCESS = 'GET_POKE_NEXT_SUCCESS'


//reducer => aceptar los datos de la API y enviarlos al estado
export default function pokeReducer(state = dataInicial, action){
    switch (action.type) {

        case GET_POKE_SUCCESS:
            return {...state, array: action.payload}
        
        case GET_POKE_NEXT_SUCCESS:
            return {...state, array: action.payload.array, offset: action.payload.offset}
       
        default:
            return state;
    }
}

//acciones => consumir la API
export const getPokemonesAccion = () => async (dispatch, getState) => {
    try {
        console.log('getState{offset}: ', getState().pokemones.offset)
        const {offset} = getState().pokemones
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}=0&limit=20`)
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: res.data.results
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const siguientePokeAccion  = (numero) => async (dispatch, getState) => {
    
    const {offset} = getState().pokemones
    console.log(offset + ' from siguiente')
    const siguiente = offset + numero;
    console.log(siguiente + ' from siguiente')

    try {

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: GET_POKE_NEXT_SUCCESS,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}