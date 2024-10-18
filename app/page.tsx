import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>Home page </h1>
      <Link href='/about' className='text-blue-500 hover:underline text-lg py-3 '>About</Link>
    </div>
      
  )
}

export default HomePage;