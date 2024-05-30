import { ObjectId } from "mongodb";
import IRepository from "../interfaces/irepository";
import Database from "../services/database";
import IOffer from "../interfaces/ioffer";

class OfferRepository implements IRepository<IOffer> {
    collection = "offers"

    async findById(id: string): Promise<IOffer | null> {
        const db = await Database.connect();
        const offers = await db.collection<IOffer>(this.collection);
        return await offers.findOne(
            { _id: new ObjectId(id) }
        );
    }

    async findAll(): Promise<IOffer[]> {
        const db = await Database.connect();
        const offers = await db.collection<IOffer>(this.collection);
        return await offers.find({}).toArray();
    }

    async create(entity: IOffer): Promise<IOffer> {
        try {
            const db = await Database.connect();
            const offers = await db.collection<IOffer>(this.collection);
            const result = await offers.insertOne(entity);
            entity.id = result.insertedId.toString();
            return entity;
        }
        catch (e) {
            throw e;
        }
    }

    async update(id: string, entity: Partial<IOffer>): Promise<IOffer | null> {
        const db = await Database.connect();
        const offers = await db.collection<IOffer>(this.collection);
        const result = await offers.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: entity },
            { returnDocument: "after" }
        );
        return result;
    }

    async delete(id: string): Promise<boolean> {
        const db = await Database.connect();
        const offers = await db.collection<IOffer>(this.collection);
        const result = await offers.deleteOne(
            { _id: new ObjectId(id) },
        );
        return result.deletedCount ? true : false;
    }
}

export default OfferRepository;