import { ObjectId } from "mongodb";

interface IOffer {
    _id?: string | ObjectId;
    destination: string;
    price: number;
    description: string;
    images: string[];
}

export default IOffer;