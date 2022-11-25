import { AllPosts, TopCarousel } from "@components/organisms";
import { FC } from "react";

export const HomePage: FC = () => {
	return (
		<>
			<TopCarousel />
			<AllPosts />
		</>
	);
};
