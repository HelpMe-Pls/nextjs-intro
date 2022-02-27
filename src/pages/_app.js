import React from 'react'
import { ThemeProvider } from 'theme-ui'
import thm from '../../theme'

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={thm}>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
