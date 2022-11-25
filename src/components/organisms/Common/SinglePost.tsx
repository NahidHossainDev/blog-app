import { FC } from "react";

import { IPosts } from "@libs/api/interface";
import Icon, { close, message } from "@libs/icons";
import { deletePost } from "@store/posts.slice";
import { Card, Divider, Image, Typography } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const { Paragraph, Text } = Typography;

export const SinglePost: FC<PropsType> = ({ data, isComment }) => {
	const { id, title, body, userId } = data || {};
	const dispatch = useDispatch();

	return (
		<Wrapper bordered={false}>
			<Icon
				role='button'
				onClick={() => dispatch(deletePost(id))}
				className='cross-btn'
				path={close}
				fill='white'
				height={30}
				width={30}
			/>
			<Image src={`https://picsum.photos/${600}/${300}?random=${id}`} width='100%' alt={title} />
			<h5 className='mt-3 text-center'>
				<Link href={`post/${id}`}>
					<Text ellipsis className='text-uppercase fw-400' style={{ width: 250 }}>
						{title}
					</Text>
				</Link>
			</h5>
			<Divider>
				<i className='text-primary fw-400'>July 22, 2015</i>
			</Divider>
			<Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "More" }}>{body}</Paragraph>

			{isComment && (
				<div className='my-4 d-flex w-100'>
					<span className='px-3 ms-auto'>
						<Icon path={message} fill='gray' /> 5
					</span>
				</div>
			)}
		</Wrapper>
	);
};

interface PropsType {
	data: IPosts;
	isComment?: boolean;
}

const Wrapper = styled(Card)`
	position: relative;
	.cross-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
		z-index: 999;
		&:hover + .ant-image img {
			transition: 0.5s;
			filter: blur(6px);
		}
	}
`;
