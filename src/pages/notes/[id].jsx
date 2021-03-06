/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui'

// executed at run-time
export async function getServerSideProps({ params, req, res }) {
	const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)

	if (!response.ok) {
		res.writeHead(302, { Location: '/notes' })
		res.end()
		return { props: {} }
	}

	const { data } = await response.json()

	if (data) {
		return {
			props: { note: data },
		}
	}
}

// {note} from the props: { note: data } above
export default ({ note }) => {
	return (
		<div sx={{ variant: 'containers.page' }}>
			<h1>Note: {note.title} </h1>
		</div>
	)
}
