import nc from 'next-connect'
import notes from '../../../data/data'

// from the client's perspective (i.e. GET and POST requests are sent from the client) but it actually executed on the server
const handler = nc()
	.get((_req, res) => {
		res.json({ data: notes }) // returns an array
	})
	.post((req, res) => {
		// to the server
		const id = Date.now()
		const note = { ...req.body, id }

		notes.push(note)
		res.json({ data: note }) // returns a note (singular)
	})
export default handler
