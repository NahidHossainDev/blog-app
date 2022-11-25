import { Image } from "antd";
import Link from "next/link";
import { FC, ImgHTMLAttributes } from "react";
import { UrlObject } from "url";

export const Brand: FC<BrandProps> = ({ isClickable, alt, href, width, height, ...rest }) => {
	if (isClickable) {
		return (
			<Link href={href} passHref>
				<Image preview={false} width={width} height={height} alt={alt} {...rest} />
			</Link>
		);
	}

	return <Image preview={false} width={width} height={height} alt={alt} {...rest} />;
};

export interface BrandProps extends ImgHTMLAttributes<HTMLImageElement> {
	isClickable?: boolean;
	href?: string | UrlObject;
	height?: number;
	width?: number;
}

Brand.defaultProps = {
	href: "/",
	src: "/logo.png",
	alt: "brand",
	isClickable: false,
	width: 150,
};
