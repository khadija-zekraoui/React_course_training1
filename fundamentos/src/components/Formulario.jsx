import React from 'react'

const Formulario = () => {
    const [lista, setLista] = React.useState([]);
    const[fruta, setFruta] = React.useState('');
    const[descripcion, setDescripcion] = React.useState('');
    
    const guardarDatos = (e) => {
        e.preventDefault();
        
        if(!fruta.trim()){
            console.log('Esta vacío fruta');
            return;
        }
        if(!descripcion.trim()){
            console.log('Esta vacío descripcion');
            return;
        }

        console.log('procesando datos... ' + fruta + " " + descripcion);
        setLista([...lista, {fruta: fruta, descripcion: descripcion}]);
        e.target.reset();
        setFruta('');
        setDescripcion('');
    }
    return (
        <div>
           <h1>Formulario</h1> 
           <form onSubmit={ guardarDatos}>
               <input
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={ e => setFruta(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Ingrese Descripción"
                    className="form-control mb-2"
                    onChange={ e => setDescripcion(e.target.value)}
                />

                <button className="btn btn-primary btn-block" type="submit">Agregar fruta</button>
           </form>
            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            {item.fruta} - {item.descripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
