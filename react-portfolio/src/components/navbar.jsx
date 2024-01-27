import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from'react-icons/bs';
import Logo from '/assets/circlelogo.png';
import { Link } from'react-router-dom';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate text-gray-300'>
            <img src={Logo} alt='Logo' style={{ width: '50px'}}/>
{/* //menu */}
        
        <ul className='hidden md:flex'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
                <Link to='/timeline'>Timeline</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
                
 {/* // burger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav? <FaBars /> : <FaTimes/>}
        </div>
{/* // mobile */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link to='/'>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to='/timeline'>Timeline</Link>
            </li>
            
            <li className='py-6 text-4xl'>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[90%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center'
                     href='https://www.linkedin.com/in/colin-douglas-068ba8262/'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-67px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center'
                     href='https://github.com/dpprdgls'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
    )
}

export default NavBar;