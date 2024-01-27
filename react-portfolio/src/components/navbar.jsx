import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '/assets/circlelogo.png';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate text-gray-300'>
            <img src={Logo} alt='Logo' style={{ width: '50px'}}/>
{/* //menu */}
        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        
 {/* // burger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav? <FaBars /> : <FaTimes/>}
        </div>
{/* // mobile */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>Portfolio</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* social icons */}
        <div></div>
    </div>
    )
}

export default NavBar;