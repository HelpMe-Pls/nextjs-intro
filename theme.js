// jsx pragma:  a hint to the compiler how to compile this file. The comment combined with the JSX import from theme-ui tells the compiler, babel, in this case, of what JSX tool to use to handle JSX in this file. It's the same reason you had to import React in your JSX files.

/** @jsx jsx */
/** @jsxRuntime classic */

import { roboto } from '@theme-ui/presets'

const theme = {
	...roboto,
	containers: {
		card: {
			boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
			border: '1px solid',
			borderColor: 'muted',
			borderRadius: '4px',
			p: 2,
		},
		page: {
			width: '100%',
			maxWidth: '960px',
			m: 0,
			mx: 'auto',
		},
	},
	styles: {
		...roboto.styles,
	},
}

export default theme
