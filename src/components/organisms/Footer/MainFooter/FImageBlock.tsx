import { Col, Image, Row } from "antd";
import { FC } from "react";

export const FImageBlock: FC = () => {
	return (
		<Row>
			{Array(8)
				.fill(0)
				.map((_, i) => (
					<Col xs={6} sm={6} md={6} lg={3} key={i}>
						<Image preview={false} src={`https://picsum.photos/${300}?random=${i}`} width='100%' alt='' />
					</Col>
				))}
		</Row>
	);
};
