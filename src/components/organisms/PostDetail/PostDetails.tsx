import { getPostState } from "@store/posts.slice";
import { Divider, Image } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";

export const PostDetails: FC = () => {
	const { selectedPost } = useSelector(getPostState);
	const { title, id } = selectedPost;

	return (
		<div>
			<h4 className=' text-center text-uppercase fw-400'>{title}</h4>

			<div className='m-auto' style={{ maxWidth: "250px" }}>
				<Divider style={{ width: "20%" }}>
					<i className='text-primary fw-400'>July 22, 2015</i>
				</Divider>
			</div>
			<article>
				Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla
				purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam.
				Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur
				Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum
				accumsan leo vel tempor Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada
				fames ac turpis egestas. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
				magnis dis parturient montes
			</article>

			<Image className='my-4' src={`https://picsum.photos/${700}/${300}?random=${id}`} width='100%' alt={title} />

			<article>
				Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla
				purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam.
				Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur
				Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum
				accumsan leo vel tempor Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada
				fames ac turpis egestas. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
				magnis dis parturient montes
			</article>
		</div>
	);
};
