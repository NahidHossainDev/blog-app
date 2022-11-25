import { wrapper } from "@store";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { default as nProgress, default as NProgress } from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import "../../public/scss/app.scss";

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		nProgress.configure({ showSpinner: true });
		router.events.on("routeChangeStart", () => NProgress.start());
		router.events.on("routeChangeComplete", () => NProgress.done());
		router.events.on("routeChangeError", () => NProgress.done());
	}, []);
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
