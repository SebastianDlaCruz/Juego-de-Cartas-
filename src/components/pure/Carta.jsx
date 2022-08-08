import React, { useState, useRef } from 'react';
import { Img, DivUno } from '../styles/juegoStyle';

function Carta({
    id, name, rota, img, guardar, index
}) {

    const infoCard = useRef(' ');

    const rotar = () => {

        let ids = infoCard.current.id;

        guardar(ids, index);
    };



    return (

        <DivUno className="card" rota={rota}>

            <div
                ref={infoCard}
                className="face front"
                id={id}
                onClick={rotar}
            >
                <Img src="assets/img/cartaD.png" alt="carta trasera" />
            </div>

            <div className="face back">
                <Img src={img} alt={name} />
            </div>

        </DivUno>

    );
}

export default Carta;
