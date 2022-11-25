import { ParsedUrlQuery } from "querystring";
import { BaseAPI } from "./baseAPI";
import { IComments, IPosts } from "./interface";
import { IUsersData } from "./interface/users";

class Post_API extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getAllPosts = (query?: ParsedUrlQuery) => {
		const params = new URLSearchParams();
		params.set("_page", "1");
		params.set("_limit", "20");
		if (query && Object.keys(query).length > 0) {
			for (const [key, value] of Object.entries(query)) {
				params.set(key, value as string);
			}
		}

		return this.get<IPosts[]>(`posts?${params}`);
	};

	getPostById = (id: number) => this.get<IPosts>(`posts/${id}`);

	getCommentsByPostId = (id: number) => this.get<IComments[]>(`posts/${id}/comments`);

	getUserById = (id: number) => this.get<IUsersData>(`users/${id}`);

	getPostByUserId = (id: number) => this.get<IPosts[]>(`users/${id}/posts?_limit=5`);
}

export const post_API = new Post_API(process.env.apiURL);
