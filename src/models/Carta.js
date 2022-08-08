import { Type } from "./Type";

export class Card {
    constructor(id, nombre, img, rota, type) {

        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.rota = rota;
        this.type = Type[type] || 'Sin formato';

    }
}