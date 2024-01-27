import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from'react-icons/bs';
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
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center'
                     href='/'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
    )
}

export default NavBar;