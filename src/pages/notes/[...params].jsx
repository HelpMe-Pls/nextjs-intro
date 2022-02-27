import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
	const router = useRouter()

	// {...} represents all the random routes that will be redirected to THIS page
	// e.g. notes/some/random/route/6/9/69
	const { params } = router.query
	const id = 2

	return (
		<>
			<h1>Note {params}</h1>

			<button onClick={() => router.push('/')}>Go Home</button>

			<button onClick={() => router.push('/user/[id]', `/user/${id}`)}>
				Dashboard
			</button>
		</>
	)
}

export default Page
