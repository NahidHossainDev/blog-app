import { IPosts } from "@libs/api/interface";
import { post_API } from "@libs/api/postAPI";
import { Skeleton } from "antd";
import { FC, useEffect, useState } from "react";
import { SinglePost } from "../Common";

export const AuthorsAllPost: FC<{ userId: number }> = ({ userId }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [allPosts, setAllPosts] = useState<IPosts[]>(null);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		setLoading(true);
		try {
			const res = await post_API.getPostByUserId(userId);
			if (res) setAllPosts(res);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};
	return (
		<Skeleton loading={loading} active className='mt-4'>
			{allPosts?.length > 0 ? (
				allPosts?.map((el) => <SinglePost key={el.id} data={el} />)
			) : (
				<h6 className='text-center text-secondry fw-400'> No post found of this author! </h6>
			)}
		</Skeleton>
	);
};
