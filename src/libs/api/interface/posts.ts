interface IUser {
	_id: string;
	name: string;
	mobile: string;
	avatar?: string;
}

export interface ISearchUserData {
	users: IUser[];
}

export interface ICreatorOrParticipant {
	id: string;
	name: string;
	mobile: string;
	avatar: string;
	email?: string;
}

export interface IPosts {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface IComments {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}
