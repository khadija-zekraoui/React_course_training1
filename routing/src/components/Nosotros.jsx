import React from 'react'
import { Link } from 'react-router-dom'

const Nosotros = () => {
    const [civilizacions, setCivilizacions] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const dataCivilizacions = await data.json()
        setCivilizacions(dataCivilizacions.civilizations)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    civilizacions.map(item => (
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
