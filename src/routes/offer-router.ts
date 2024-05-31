import { Router } from 'express';
import OfferController from '../controllers/offer-controller';

const offerRouter = Router();

offerRouter.post('/getById', OfferController.findById);
offerRouter.get('/getAll', OfferController.findAll);
offerRouter.post('/create', OfferController.create);
offerRouter.post('/update', OfferController.update);
offerRouter.post('/delete', OfferController.delete);

export default offerRouter