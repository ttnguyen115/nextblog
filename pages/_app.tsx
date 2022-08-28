import axiosClient from '@/app/axiosClient';
import { EmptyLayout } from '@/components/layout';
import { SWRConfig } from 'swr';
import '../styles/globals.css';
import { AppPropsWithLayout } from '../types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;

	return (
		<SWRConfig
			value={{
				fetcher: (url) => axiosClient.get(url),
				shouldRetryOnError: false,
			}}
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	);
}

export default MyApp;
