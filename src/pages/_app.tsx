import { wrapper } from "@store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../../public/scss/app.scss";

function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default wrapper.withRedux(App);
