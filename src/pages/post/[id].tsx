import { MainLayout, PostPageUnit } from "@components/templates";
import { IPosts } from "@libs/api/interface";
import { post_API } from "@libs/api/postAPI";
import { updateSelectedPost } from "@store/posts.slice";
import { NextPage } from "next";
import { useDispatch } from "react-redux";

export const Post: NextPage<{ data: IPosts }> = ({ data }) => {
	const dispatch = useDispatch();
	dispatch(updateSelectedPost(data));

	return (
		<MainLayout>
			<PostPageUnit />
		</MainLayout>
	);
};

export async function getStaticPaths() {
	try {
		const posts = await post_API.getAllPosts();
		const paths = posts?.map((post) => ({
			params: { id: String(post.id) },
		}));
		return { paths, fallback: false }; // Fallback can be true for large app like e-commerce
	} catch (error) {
		return { paths: null, fallback: false };
	}
}

export async function getStaticProps({ params }) {
	try {
		const data = await post_API.getPostById(params?.id);
		return {
			props: {
				data,
				isErr: null,
			},
		};
	} catch (error) {
		return {
			props: {
				isErr: true,
				data: null,
			},
			// revalidate:100000
		};
	}
}

export default Post;
