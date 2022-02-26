import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter();
    
    // {id} is whatever in the brackets of the file name
    const { id } = router.query 
    
    return (
        <h1>
            Note {id}
        </h1>
    )
}
    

export default Page