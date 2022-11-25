import { HomePageUnit, MainLayout } from "@components/templates";
import { IPosts } from "@libs/api/interface";
import { IRandomImg } from "@libs/api/interface/images";
import { post_API } from "@libs/api/postAPI";
import { updateIms, updatePosts } from "@store/posts.slice";
import { NextPage, NextPageContext } from "next";
import { useDispatch } from "react-redux";

const Home: NextPage<PropsType> = ({ data, imgs }) => {
	const dispatch = useDispatch();

	dispatch(updatePosts(data));
	dispatch(updateIms(imgs));
	return (
		<MainLayout>
			<HomePageUnit />
		</MainLayout>
	);
};

// we can also use ISR (Incremental Static Regeneration) method if our posts update frequently.

export async function getStaticProps(ctx: NextPageContext) {
	const { query } = ctx;

	try {
		// const imgs = await random_Img_API.getAllImages();
		const data = await post_API.getAllPosts(query);
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
			// revalidate:1000
		};
	}
}
interface PropsType {
	isErr?: boolean;
	data: IPosts[];
	imgs: IRandomImg[];
}

export default Home;
