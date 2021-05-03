import React, {useState} from 'react'
import { Button, Segment  } from 'semantic-ui-react'
import {Form} from 'formsy-semantic-ui-react';

const Formulario_ui = () => {
    
    const [name, setName] = useState('');
    const[surname, setSurname] = useState('');

    const userInformation = (e) => {
        //e.preventDefault();
        console.log("Hello " + name + ", " + surname);
        alert("Hello " + name + ", " + surname);
    }

    return (
        <Segment>
            <Form onSubmit={userInformation} >
                <Form.Input
                    name="name"
                    type="text"
                    placeholder='Your name...'
                    onChange={ e => setName(e.target.value)}
                />
                    <Form.Input
                    name="surname"
                    type="text"
                    placeholder='Your surname...'
                    onChange={ e => setSurname(e.target.value)}
                />
                <Button type='submit' primary>Ok</Button>
                </Form>
        </Segment>        
    )
}

export default Formulario_ui
