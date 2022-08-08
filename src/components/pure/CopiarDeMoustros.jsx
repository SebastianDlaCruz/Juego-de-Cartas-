import React from 'react';
import { UseFetch } from '../../hooks/useFetch';
import Carta from './Carta';
const CopiarDeMoustros = () => {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician|Blue-Eyes White Dragon|Red-Eyes B. Dragon|Summoned Skull|jinzo|dark necrofear|obelisk the tormentor|slifer the sky dragon|the winged dragon of ra`;

    const cartas = UseFetch(url);

    return (
        <div>
            {cartas.map(i => <Carta key={i.id} img={i.card_images[0].image_url}
                name={i.name} ide={i.id} />)}
        </div>
    );
}

export default CopiarDeMoustros;
