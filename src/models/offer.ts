import { ObjectId } from "mongodb";
import IOffer from "../interfaces/ioffer";

class Offer implements IOffer {
    _id?: string | ObjectId;
    destination: string;
    price: number;
    description: string;
    images: string[];

    constructor(offer: IOffer) {
        this._id = offer._id;
        this.destination = offer.destination;
        this.price = offer.price;
        this.description = offer.description;
        this.images = offer.images;
    }
}

export default Offer;