import { Request, Response } from 'express';
import IOffer from '../interfaces/ioffer';
import OfferRepository from '../repositories/offer-repository';

class OfferController {
    static repository = new OfferRepository;

    public static async findById(req: Request, res: Response): Promise<void> {
        try {
            const offer = req.body;

            if (!offer.id) {
                res.status(400).json({ message: 'Invalid offer data' });
                return;
            }

            const result = await OfferController.repository.findById(offer.id);
            res.json(result);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async findAll(req: Request, res: Response): Promise<void> {
        try {
            const result = await OfferController.repository.findAll();
            res.json(result);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async create(req: Request, res: Response): Promise<void> {
        try {
            const offer: IOffer = req.body;
            console.log(offer);

            if (!offer.destination || !offer.price || !offer.description || !offer.images) {
                res.status(400).json({ message: 'Invalid offer data' });
                return;
            }

            const result = await OfferController.repository.create(offer);

            if (result) {
                console.log(result);
                res.status(200).json(result);
            }
            else
                res.status(400).json({ message: "Offert not created" });
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async update(req: Request, res: Response): Promise<void> {
        try {
            const offer: IOffer = req.body;

            if (!offer.id) {
                res.status(400).json({ message: 'Invalid offer data' });
                return;
            }

            const result = await OfferController.repository.update(offer.id, offer);

            if (result) {
                res.status(200).json({ message: "Offert updated", offer });
            }
            else
                res.status(400).json({ message: "Offert not updated" });
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async delete(req: Request, res: Response): Promise<void> {
        try {
            const offer: IOffer = req.body;

            if (!offer.id) {
                res.status(400).json({ message: 'Invalid offer data' });
                return;
            }

            const result = await OfferController.repository.delete(offer.id);

            if (result) {
                console.log("Offert deleted", offer.id);
                res.status(200).json({ message: "Offert deleted" });
            }
            else
                res.status(400).json({ message: "Offert not deleted" });
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }
}

export default OfferController;