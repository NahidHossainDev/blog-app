import { Variant } from "@components/atoms/interfaces";
import Link, { LinkProps as NextLinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC, MutableRefObject } from "react";
import styled from "styled-components";

export const NavLink: FC<PropsType> = ({ title, subtitle, href, ...rest }) => {
	const router = useRouter();
	return (
		<Wrapper href={href} {...rest}>
			<span className={`Title ${router.pathname === href ? "active" : ""}`}>{title}</span>
		</Wrapper>
	);
};
interface PropsType extends NextLinkProps {
	title: string;
	subtitle?: string;
	ref?: MutableRefObject<any>;
	isActive?: boolean;
	variant?: Extract<Variant, "primary" | "dark" | "light">;
	target?: string;
}

NavLink.defaultProps = {
	isActive: false,
	variant: "primary",
};

const Wrapper = styled(Link)`
	display: inline-block;
	&.active {
		color: var(--bs-primary);
	}
	.Title {
		margin-bottom: 0;
		font-family: "Segoe UI";
	}
	.Title.active {
		color: var(--primary);
	}
	position: relative;
	.Subtitle {
		font-size: 0.825rem;
		font-weight: 500;
	}
`;
