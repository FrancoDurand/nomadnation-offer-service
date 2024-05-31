import { ObjectId } from "mongodb";
import IRepository from "../interfaces/irepository";
import Database from "../services/database";
import IOffer from "../interfaces/ioffer";

class OfferRepository implements IRepository<IOffer> {
    collection = "offers"

    async create(entity: IOffer): Promise<IOffer> {
        const db = await Database.connect();
        const users = await db.collection<IOffer>(this.collection);
        await users.insertOne(entity);
        return entity;
    }

    async update(entity: Partial<IOffer>): Promise<IOffer | null> {
        const db = await Database.connect();
        const users = await db.collection<IOffer>(this.collection);
        const _id = new ObjectId(entity._id);
        delete entity._id;

        const result = await users.findOneAndUpdate(
            { _id },
            { $set: entity },
            { returnDocument: "after" }
        );

        return result;
    }

    async delete(entity: IOffer): Promise<boolean> {
        const db = await Database.connect();
        const users = await db.collection<IOffer>(this.collection);
        const result = await users.deleteOne(
            { _id: new ObjectId(entity._id) },
        );

        return result.deletedCount ? true : false;
    }


    async findById(entity: IOffer): Promise<IOffer | null> {
        const db = await Database.connect();
        const users = await db.collection<IOffer>(this.collection);
        return await users.findOne({ _id: new ObjectId(entity._id) });
    }

    async findAll(): Promise<IOffer[]> {
        const db = await Database.connect();
        const users = await db.collection<IOffer>(this.collection);
        return await users.find().toArray();
    }
}

export default OfferRepository;