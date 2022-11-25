import { BaseAPI } from "./baseAPI";
import { BR } from "./interface";
import { IRandomImg } from "./interface/images";

class Img_API extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getAllImages = () => this.get<BR<IRandomImg[]>>(`v2/list?page=2&limit=20`);

	// getPostById = (id: string) => this.get<BR<IPosts>>(`inbox/messages/${id}`);
}

export const random_Img_API = new Img_API(process.env.imgApiURL);
