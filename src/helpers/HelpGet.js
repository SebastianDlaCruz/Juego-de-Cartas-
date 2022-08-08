export const PeticionGet = async (url) => {

    const respuesta = await fetch(url);

    const { data } = await respuesta.json();

    const cartas = data.map(card => card);

    return cartas;
}