import React from 'react'
import { useParams } from 'react-router'

const Civilizacion = () => {

    const [civilizacion, setCivilizacion] = React.useState({})
    //parametro de la URL
    const {id} = useParams();
    console.log(id);

    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
            const dataCivilizacion = await data.json();
            setCivilizacion(dataCivilizacion);
        }
        obtenerDatos();
    }, [id])


    return (
        <div>
            <h1>Civilización</h1>
            <p>{civilizacion.name}</p>
            <p>{civilizacion.team_bonus}</p>
        </div>
    )
}

export default Civilizacion
