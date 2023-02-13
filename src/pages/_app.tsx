import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import LayoutConatainer from '../components/layoutConatainer';

import { GlobalStyle } from '../styles/global-styles';
import theme from '../styles/theme';
import variables from '../styles/variable';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={{ style: theme, variables }}>
			<GlobalStyle />
			<LayoutConatainer>
				<Component {...pageProps} />
			</LayoutConatainer>
		</ThemeProvider>
	);
}

export default MyApp;
