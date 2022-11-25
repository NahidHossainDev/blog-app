import { Container } from "@components/atoms";
import { AuthorsAllPost, CoverImg, PostDetails } from "@components/organisms";
import { AllComments } from "@components/organisms/PostDetail/AllComments";
import { AuthorData } from "@components/organisms/PostDetail/AuthorData";
import { post_API } from "@libs/api/postAPI";
import { getPostState, updateComments, updateSelectedAuthor } from "@store/posts.slice";
import { Col, Row } from "antd";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialState = { author: false, comments: false };
export const PostPage: FC = () => {
	const [loading, setLoading] = useState<typeof initialState>(initialState);

	const { selectedPost } = useSelector(getPostState);
	const { id, title, body, userId } = selectedPost || {};
	const dispatch = useDispatch();

	useEffect(() => {
		getAuthorData();
		getAllComments();
	}, []);

	const getAuthorData = async () => {
		setLoading((prev) => ({ ...prev, author: true }));
		try {
			const res = await post_API.getUserById(userId);
			if (res) dispatch(updateSelectedAuthor(res));
		} catch (error) {
		} finally {
			setLoading((prev) => ({ ...prev, author: false }));
		}
	};

	const getAllComments = async () => {
		setLoading((prev) => ({ ...prev, comments: true }));
		try {
			const res = await post_API.getCommentsByPostId(userId);
			if (res) dispatch(updateComments(res));
		} catch (error) {
		} finally {
			setLoading((prev) => ({ ...prev, comments: false }));
		}
	};

	return (
		<>
			<CoverImg id={id} title={title} />
			<Container className='mt-5'>
				<Row gutter={{ xs: 4, sm: 8, md: 20, lg: 40 }}>
					<Col xs={24} sm={24} md={24} lg={18}>
						<PostDetails />
						<AllComments isLoading={loading.comments} />
					</Col>
					<Col xs={24} sm={24} md={24} lg={6} className='mt-5'>
						<AuthorData isLoading={loading.author} />
						<AuthorsAllPost userId={userId} />
					</Col>
				</Row>
			</Container>
		</>
	);
};
