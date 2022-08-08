import React, { useState, useEffect } from 'react';
import { PeticionGet } from '../helpers/HelpGet';

export const UseFetch = (url) => {

    const [card, setCard] = useState([]);

    const getCard = async () => {
        const newCard = await PeticionGet(url);
        setCard(newCard);
    }

    useEffect(() => {
        getCard();
    }, []);


    return card;
}

