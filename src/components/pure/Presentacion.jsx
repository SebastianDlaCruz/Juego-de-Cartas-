import React, { useState } from 'react';
import {
    Ventana,
    SectionPresentacion,
    Reglas,

} from '../styles/PresentacionSyles';

const Presentacion = () => {

    const doc = document;
    const style = doc.documentElement.style;

    const handleGame = () => {
        style.setProperty('--opacity', '0');
        style.setProperty('--visibility', 'hidden');
        style.setProperty('--izquierda', '-100%');
        style.setProperty('--derecha', '100%');
    }

    const handleReglas = (event) => {

        if (event.target.matches(`#abrir`)) {
            style.setProperty('--transformY', '0%');
        } else if (event.target.matches(`#cerrar`)) {
            style.setProperty('--transformY', '100%');
        }
    }

    return (
        <>
            <Ventana izquierda />
            <Ventana />
            <SectionPresentacion>
                <header>
                    <h1>Juego de Momoria</h1>
                    <img src="assets/img/Yu-Gi-OhLogo.png" alt="yugioh" />
                </header>
                <footer>
                    <button onClick={handleGame}>Jugar</button>
                    <button id="abrir" onClick={handleReglas} >Reglas</button>
                </footer>
            </SectionPresentacion>
            <Reglas>
                <header>
                    <h2>Reglas</h2>
                    <button id="cerrar" onClick={handleReglas}>X</button>
                </header>
                <ul>
                    <li>No hackear</li>
                    <li>No hackear</li>
                    <li>No hackear</li>
                </ul>
            </Reglas>

        </>
    );
}

export default Presentacion;
