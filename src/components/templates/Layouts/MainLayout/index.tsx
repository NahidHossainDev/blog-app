import { MainFooter, MainHeader } from "@components/organisms";
import { Layout } from "antd";
import { FC } from "react";
import styled from "styled-components";

export const MainLayout: FC<PropsType> = ({ children }) => {
	return (
		<Wrapper>
			<MainHeader />
			<main>{children}</main>
			<MainFooter />
		</Wrapper>
	);
};

interface PropsType {
	children?: React.ReactNode;
}

const Wrapper = styled(Layout)`
	background-color: var(--bs-white);
`;
