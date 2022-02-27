import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Page = () => {
	const router = useRouter()

	// {id} is whatever in the brackets of the file name
	const { id } = router.query

	return (
		<>
			<h1>Note: {id}</h1>
			Back to{' '}
			<Link href="/notes">
				<a>Notes</a>
			</Link>
		</>
	)
}

export default Page
