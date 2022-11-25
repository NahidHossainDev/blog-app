import { Container } from "@components/atoms";
import { getPostState } from "@store/posts.slice";
import { Col, Row } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";
import { SinglePost } from "../Common";

export const AllPosts: FC = () => {
	const { allPosts } = useSelector(getPostState);

	return (
		<Container>
			<Row>
				{allPosts?.map((el) => (
					<Col key={el.id} md={12}>
						<SinglePost data={el} />
					</Col>
				))}
			</Row>
		</Container>
	);
};
