import React from 'react'
import Button from '../Common/Button'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='py-10 pb-5'>
      <div className='border-t border-b gap-10 py-10 border-white/30 grid md:grid-cols-4 items-center justify-center md:justify-between'>
        <div className=''>
          <img className='mx-auto md:mx-0 mb-2' src="/images/Heading.png" alt="" />
          <p>Global Climate Change initiative</p>
        </div>
        <div className='md:col-span-2'>
          <ul className='flex flex-col md:flex-row gap-5 md:gap-10 text-sm items-center justify-center'>
            <li>Home</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex gap-2 items-center justify-end'>
          <Button rounded={true} content={<FaFacebook />} />
          <Button rounded={true} content={<FaTwitter />} />
          <Button rounded={true} content={<FaInstagram />} />
          <Button rounded={true} content={<FaLinkedin />} />
        </div>
      </div>
      <p className='text-center mt-6 text-sm'>Copyright © {new Date().getFullYear()} Ocean & Us | All Rights Reserved</p>
    </footer>
  )
}

export default Footer