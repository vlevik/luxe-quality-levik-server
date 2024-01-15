import { Request, Response } from 'express';
import { adsService } from '../services/ads';

export const adsController = {
	getAll: async (req: Request, res: Response) => {
		const { chosenRegions } = req.query;
		const ads = await adsService.getAll(chosenRegions as string[]);

		res.status(200).json(ads);
	},

	getById: async (req: Request, res: Response) => {
		const { id } = req.query;
		const ad = await adsService.getById(id as string);

		res.status(200).json(ad);
	},

	createOne: async (req: Request, res: Response) => {
		const newAd = req.body;		

		if (Object.values(newAd).some((value) => !value)) {
			const missedFields = Object.keys(newAd).filter((key) => !newAd[key]);

			res.sendStatus(400);
		}

		const ad = await adsService.createOne(newAd);

		res.status(201).json(ad);
	}
}