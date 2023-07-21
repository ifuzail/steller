import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <section>
      <div className='w-full lg:h-96 bg-emerald-950 overflow-hidden'>
        <div className='flex flex-row justify-between items-center px-10'>
          <div>
          <h1 className='font-bold lg:text-7xl text-2xl text-white'>GET THE PRODUCT YOU WANT</h1>
          <Link href='#ProductListing'>
          <button className='bg-white px-4 py-2 rounded-md lg:mt-5 mt-2 hover:text-white hover:bg-green-600 lg:w-32 font-bold lg:text-lg text-xs'>Explore</button>
          </Link>
          </div>  
          <img src="/banner.png" alt="banner" 
          className='object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default Banner