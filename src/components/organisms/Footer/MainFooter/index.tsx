import { Container } from "@components/atoms";
import { Brand } from "@components/molecules";
import Icon, { facebookCircleFill, instagram, linkedin, twitter } from "@libs/icons";
import { Button, Col, Input, Row } from "antd";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import { FImageBlock } from "./FImageBlock";

export const MainFooter: FC = () => {
	return (
		<Footer>
			<FImageBlock />
			<Container className='py-5'>
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col xs={24} sm={12} md={12} lg={6}>
						<Brand isClickable />
					</Col>
					<Col xs={24} sm={12} md={12} lg={6}>
						<p className=' text-uppercase text-light letter-space-2'>Subscription</p>
						<Input placeholder='Your email address' />

						<Button type='primary' className='text-uppercase my-3 fw-600 bg-secondary border-0' block>
							Subscription
						</Button>
					</Col>
					<Col xs={24} sm={12} md={12} lg={6}>
						<p className=' text-uppercase text-light letter-space-2'>RECENT POSTS</p>
						<p className=' text-light'>
							<Link href='/'>About Us</Link>
						</p>
						<p className=' text-light'>
							<Link href='/'>Contact Us</Link>
						</p>
						<p className=' text-light'>
							<Link href='/'>Blogs</Link>
						</p>
					</Col>
					<Col xs={24} sm={12} md={12} lg={6}>
						<p className=' text-uppercase text-light letter-space-2'>Follow Us</p>
						<Link href='/' className='me-2'>
							<Icon fill='var(--bs-primary)' path={facebookCircleFill} />
						</Link>
						<Link href='/' className='me-2'>
							<Icon fill='var(--bs-primary)' path={twitter} />
						</Link>
						<Link href='/' className='me-2'>
							<Icon fill='var(--bs-primary)' path={linkedin} />
						</Link>
						<Link href='/' className='me-2'>
							<Icon fill='var(--bs-primary)' path={instagram} />
						</Link>
					</Col>
				</Row>
			</Container>
		</Footer>
	);
};

const Footer = styled.footer`
	margin-top: 2rem;
	width: 100%;
	margin: auto;
	display: block;
	background-color: var(--dark);

	.brand-logo {
		max-width: 10rem;
	}
`;
