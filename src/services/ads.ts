import { Ad } from "../models";

export const adsService = {
	async getAll(chosenRegions: string[]) {
		const whereQuery: any = {}

		if(chosenRegions && chosenRegions.length) {
			whereQuery['region'] = chosenRegions
		}
		
		let ads = await Ad.findAll({
			where: whereQuery
		});

		return ads;
	},

	async getById(id: string) {
		const ad = await Ad.findOne({ where: { id } });

		return ad;
	},

	async createOne(newAd: any) {
		try {
			const ad = await Ad.create({
				id: newAd.id,
				title: newAd.title,
				description: newAd.description,
				image: newAd.image,
				price: newAd.price,
				long: +newAd.long,
				lat: +newAd.lat,
				city: newAd.city,
				region: newAd.region,
			});
	
			await ad.save();

			return ad;
		} catch (err) {			
			console.error(err);
			throw err;
		}

	}
}