import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-styles';
import theme from '../styles/theme';
import variables from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={{ style: theme, variables }}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
