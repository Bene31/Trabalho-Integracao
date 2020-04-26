import React, { Component } from 'react'
import Usuario from './Usuario';
import image from './medico.jpg'

class Jhonnys extends Component {
    render() {
        return (
            <div>
                <p>Bem Vindo!</p>
                <Usuario name="Jhonnys Lakers" image={image}></Usuario>
            </div>
        );
    }
}

export default Jhonnys;
