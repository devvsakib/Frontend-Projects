import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

const Header = () => {
  return (
    <header className=''>
      <Navbar />
      <Banner />
      
      <div className='absolute min-w-full min-h-screen  lg:min-w-auto -z-10 top-0 right-0'>
        <div className='bg-gradient-to-t from-[#061C35] absolute h-screen'></div>
        <img src="/images/banner.png" className='object-cover object-center h-full w-full lg:w-auto lg:ml-auto' />
      </div>
    </header>
  )
}

export default Header