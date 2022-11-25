import { getPostState } from "@store/posts.slice";
import { Avatar, Comment, Divider, Skeleton } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";

export const AllComments: FC<{ isLoading?: boolean }> = ({ isLoading }) => {
	const { comments } = useSelector(getPostState);

	return (
		<>
			<Divider orientation='left'>
				<h5 className='text-secondary letter-space-1 mb-0'>All Comments ({comments?.length}) </h5>
			</Divider>
			<Skeleton loading={isLoading} avatar active>
				{comments?.length > 0 ? (
					comments?.map((el) => (
						<Comment
							key={el.id}
							author={<a>{el?.email}</a>}
							avatar={<Avatar src={`https://picsum.photos/${100}?random=${el?.id}`} alt='Han Solo' />}
							content={<p>{el.body}</p>}
						/>
					))
				) : (
					<h6 className='text-center text-secondry fw-400'> No Comment Found! </h6>
				)}
			</Skeleton>
		</>
	);
};
