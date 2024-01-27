import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate text-gray-300'>
            <img src='' alt='' />
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar;