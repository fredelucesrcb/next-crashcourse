'use client'

import React from 'react'
import { useRouter } from 'next/navigation'


const About = () => {
    const router = useRouter();

  return (
    <>
    <div>About</div>
    <button onClick={() => router.push("/")} className='bg-blue-500 text-white p-2 rounded-md'>
        Go Home.
    </button>
    </>
   
  )
}

export default About