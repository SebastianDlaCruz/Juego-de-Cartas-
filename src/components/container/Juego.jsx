import React, { useState, useEffect } from 'react';
import Presentacion from '../pure/Presentacion';
import { PeticionGet } from '../../helpers/HelpGet';
import { Card } from '../../models/Carta';
import Carta from '../pure/Carta';
import { Grid } from '../styles/juegoStyle';

function Juego() {
    const [cartas, setCartas] = useState([]);
    const [primero, setPrimero] = useState(null);
    const [segundo, setSegundo] = useState(null);

    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician|Blue-Eyes White Dragon|Shield %26 Sword|Seven Tools of the Bandit
    |Red-Eyes B. Dragon|Summoned Skull|jinzo|harpie's feather duster|Monster Reborn|
    Lightforce Sword|Remove Trap|Brain Control|dark necrofear|obelisk the tormentor|slifer the sky dragon|the winged dragon of ra|Lightforce Sword`;

    const cargarCartas = async (url) => {
        const value = await PeticionGet(url);
        let temple = [];

        for (const card of value) {
            const cadena = card.type;

            const type = (cadena.substring(7, 16) === 'Monster')
                ? cadena.substring(7, 16)
                : (cadena.substring(0, 4) === 'Trap')
                    ? cadena.substring(0, 4)
                    : (cadena.substring(0, 5) === 'Spell')
                        ? cadena.substring(0, 5)
                        : null;

            const carta = new Card(
                card.id,
                card.name,
                card.card_images[0].image_url,
                false,
                type,
            );

            temple = [...cartas];
            cartas.push(carta);
            setCartas(temple);
        }
    };

    useEffect(() => {
        cargarCartas(url);
    }, []);

    const guardar = (id, indexD) => {

        setCartas(
            cartas.map((i, index) => {

                if (i.id === parseInt(id) && indexD === index) {

                    i.rota = true;
                }
                return i;
            })
        )

    }



    return (
        <>
            <Presentacion />
            <Grid>
                {

                    cartas.map((i, index) => <Carta key={index} id={i.id} name={i.nombre}
                        rota={i.rota}
                        img={i.img} guardar={guardar}
                        index={index}
                    />)
                }

            </Grid>
        </>
    );


}

export default Juego;
