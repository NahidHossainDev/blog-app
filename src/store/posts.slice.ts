import { IComments, IPosts } from "@libs/api/interface";
import { IRandomImg } from "@libs/api/interface/images";
import { IUsersData } from "@libs/api/interface/users";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@store";

const initialState: IPostsState = {
	allPosts: null,
	randomImgs: null,
	selectedPost: null,
	comments: null,
	selectedAuthor: null,
};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		updatePosts: (state, action: PayloadAction<IPosts[]>) => {
			state.allPosts = action.payload;
		},
		deletePost: (state, action: PayloadAction<number>) => {
			state.allPosts = state.allPosts.filter((el) => el.id !== action.payload);
		},
		updateIms: (state, action: PayloadAction<IRandomImg[]>) => {
			state.randomImgs = action.payload;
		},
		updateSelectedPost: (state, action: PayloadAction<IPosts>) => {
			state.selectedPost = action.payload;
		},
		updateSelectedAuthor: (state, action: PayloadAction<IUsersData>) => {
			state.selectedAuthor = action.payload;
		},
		updateComments: (state, action: PayloadAction<IComments[]>) => {
			state.comments = action.payload;
		},
	},
});

export default postsSlice.reducer;
export const { updatePosts, deletePost, updateComments, updateIms, updateSelectedPost, updateSelectedAuthor } =
	postsSlice.actions;
export const getPostState = (state: AppState) => state.posts;

type IPostsState = {
	allPosts: IPosts[];
	selectedPost: IPosts;
	comments: IComments[];
	randomImgs: IRandomImg[];
	selectedAuthor: IUsersData;
};
