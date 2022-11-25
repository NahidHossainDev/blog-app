import { getPostState } from "@store/posts.slice";
import { Avatar, Card, Skeleton } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";

export const AuthorData: FC<{ isLoading?: boolean }> = ({ isLoading }) => {
	const { selectedAuthor } = useSelector(getPostState);
	const { name, email, address, company, id } = selectedAuthor || {};
	const { city, street, suite } = address || {};
	return (
		<Skeleton loading={isLoading} active>
			<Card>
				<h6 className='letter-space-2 fw-500 text-center'>{name}</h6>
				<div className='d-flex mt-4 mb-2'>
					<Avatar
						size={64}
						className='mx-auto'
						src={`https://picsum.photos/${100}?random=${id}`}
						alt={name}
					/>
				</div>

				<div className='text-center'>{email}</div>
				<div className='text-center'>
					{street}, {suite}, {city}
				</div>
			</Card>
		</Skeleton>
	);
};
