import React from 'react'

const Banner = () => {
  return (
    <section>
      <div className='w-full lg:h-96 bg-emerald-950 overflow-hidden'>
        <div className='flex flex-row justify-between items-center px-10'>
          <div>
          <h1 className='font-bold lg:text-7xl text-xl text-white'>GET THE PRODUCT YOU WANT</h1>
          </div>  
          <img src="/banner.png" alt="banner" 
          className='object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default Banner