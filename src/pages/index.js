/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui'
// import Link from 'next/link'

export function getStaticProps() {
	return {
		props: {
			content: {
				title: 'Look at my note app tho',
			},
		},
	}
}

// {content} from the return value of getStaticProps() above
export default ({ content }) => (
	<div sx={{ height: `calc(100vh - 60px)` }}>
		<div
			sx={{
				variant: 'containers.page',
				display: 'flex',
				alignItems: 'center',
				height: '100%',
			}}
		>
			<h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
		</div>
	</div>
)
