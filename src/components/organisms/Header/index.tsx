import { Container } from "@components/atoms";
import { Brand } from "@components/molecules";
import { navItems } from "@utils/constants";
import { Affix, Menu } from "antd";
import { FC } from "react";
import styled from "styled-components";

export const MainHeader: FC = () => {
	return (
		<Wrapper>
			<div className='text-center border-bottom py-3'>
				<Brand isClickable src='/logo-black.png' width={200} />
			</div>
			<Affix offsetTop={0}>
				<Container>
					<div className='row justify-content-center'>
						<Menu
							theme='light'
							className='menu-items text-center'
							mode='horizontal'
							defaultSelectedKeys={["HOME"]}
							items={navItems}
						/>
					</div>
				</Container>
			</Affix>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	background-color: var(--bs-white);

	.ant-menu-overflow {
		display: block;

		.ant-menu-title-content {
			letter-spacing: 1px;
			font-weight: 500;
		}
	}
	.ant-menu-horizontal {
		border-bottom: none;
	}
	.ant-affix {
		background-color: var(--bs-white);
		box-shadow: 0 8px 15px rgb(0 0 0 / 10%);
	}
`;
