import IOffer from "../interfaces/ioffer";

class Offer implements IOffer {
    id?: string | null;
    destination: string;
    price: number;
    description: string;
    images: string[];

    constructor(offer: IOffer) {
        this.id = offer.id ?? null;
        this.destination = offer.destination;
        this.price = offer.price;
        this.description = offer.description;
        this.images = offer.images;
    }
}

export default Offer;