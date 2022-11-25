import { FC, HTMLAttributes } from "react";
import styled from "styled-components";

export const Container: FC<PropsType> = ({ children, ...rest }) => {
	return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ fluid?: boolean }>`
	margin: 0 auto;
	width: 100%;
	padding-left: 0.75rem;
	padding-right: 0.75rem;

	@media (min-width: 480px) {
		max-width: 540px;
	}
	@media (min-width: 576px) {
		max-width: 540px;
	}

	@media (min-width: 768px) {
		max-width: 720px;
	}
	@media (min-width: 992px) {
		max-width: 960px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
	@media (min-width: 1280px) {
		max-width: 1215px;
	}
	@media (min-width: 1400px) {
		max-width: 1340px;
	}
`;

interface PropsType extends HTMLAttributes<HTMLElement> {
	fluid?: boolean;
	children?: React.ReactNode;
}
