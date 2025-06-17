import React from 'react'
import { navLinks } from '../constants/utils'

const NavBar = () => {
    return (
        <header className='navbar bg-black'>
            <div className='inner'>
                <a className='logo' href='#hero'>
                    Akash
                </a>

                {/* Show on small screens only */}
                <div className='block md:hidden'>
                    <a href="#work" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span class="relative px-3 py-1.5 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span class="relative text-white">Let’s Explore 🚀</span>
                        </span>
                    </a>
                </div>

                {/* Desktop nav links */}
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline'></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
