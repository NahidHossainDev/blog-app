import { useWindowSize } from "@libs/hooks";
import { getPostState } from "@store/posts.slice";
import { Carousel, Image, Typography } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const TopCarousel: FC = () => {
	const { allPosts } = useSelector(getPostState);
	const { width } = useWindowSize();
	const imgWidth = Math.floor(width / 3);
	const imgHight = Math.floor(width / 3 - 100) > 300 && 300;

	const sliderSetting = {
		dots: true,
		arrows: false,
		autoplay: true,
		speed: 1500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplaySpeed: 4000,
	};
	return (
		<Carousel {...sliderSetting} className='mb-5'>
			{allPosts?.slice(0, 9).map((el, i) => (
				<CarouselItem key={i}>
					<Image
						key={i}
						preview={false}
						className='h-100'
						src={`https://picsum.photos/${imgWidth}/${imgHight}?random=${i + 1}`}
						alt='carousel'
					/>
					<Typography.Text ellipsis style={{ width: 150 }} className='title'>
						{el.title}
					</Typography.Text>
				</CarouselItem>
			))}
		</Carousel>
	);
};

const CarouselItem = styled.div`
	margin-top: 0.5rem;
	position: relative;
	.title {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		color: white;
	}
`;
