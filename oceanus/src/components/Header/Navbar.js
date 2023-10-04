import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Common/Button'

const Navbar = () => {
    const menuItem = [{ name: 'Home', link: '#home' }, { name: 'About', link: '#about' }, { name: 'Resources', link: '#resources' }, { name: 'Contact', link: '#contact' }]
    return (
        <nav className='flex flex-col lg:flex-row items-center gap-y-5 justify-between py-5'>
            <div>
                <Link href={"/"}>
                    <Image
                        src="/images/logo.svg"
                        alt="Picture of the author"
                        width={150}
                        height={50}
                    />
                </Link>
            </div>
            <div>
                <ul className='flex items-center gap-10'>
                    {
                        menuItem.map((item, idx) => (
                            <li className='' key={idx}><Link href={item.link}>{item.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <Button content='Get Involved' />
            </div>
        </nav >
    )
}

export default Navbar