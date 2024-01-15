import express from 'express';
import { adsController } from '../controllers/ads.controller';

export const adsRouter = express.Router();

adsRouter.get('/', adsController.getAll);
adsRouter.get('/:id', adsController.getById);
adsRouter.post('/',express.json(), adsController.createOne);
