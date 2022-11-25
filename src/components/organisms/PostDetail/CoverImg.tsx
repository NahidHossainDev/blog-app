import { useWindowSize } from "@libs/hooks";
import { Image } from "antd";
import { FC } from "react";

export const CoverImg: FC<PropsType> = ({ id, title }) => {
	const { width } = useWindowSize();
	const imgWidth = Math.floor(width);
	const imgHight = Math.floor(width / 3);

	return (
		<Image
			preview={false}
			src={`https://picsum.photos/${imgWidth}/${imgHight}?random=${id}`}
			width='100%'
			height={250}
			className='mb-3'
			alt={title}
		/>
	);
};

interface PropsType {
	id: number;
	title: string;
}
