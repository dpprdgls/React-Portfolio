import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '/assets/circlelogo.png';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink
import '../styles/tailwind.css';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const location = useLocation();

  const handleClick = () => setNav(!nav);

   

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate text-gray-300'>
      <img src={Logo} alt='Logo' style={{ width: '50px' }} />
      {/* //menu */}
      <ul className='hidden md:flex'>
        <li>
        <NavLink exact to='/' className={location.pathname === '/' ? 'active-link' : ''}>
            Home
          </NavLink>
        </li>
        <li>
        <NavLink to='/about' className={location.pathname === '/about' ? 'active-link' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/portfolio' className={location.pathname === '/portfolio' ? 'active-link' : ''}>
            Portfolio
          </NavLink>
        </li>
        <li>
        <NavLink to='/timeline' className={location.pathname === '/timeline' ? 'active-link' : ''}>
            Timeline
          </NavLink>
        </li>
        <li>
        <NavLink to='/contact' className={location.pathname === '/contact' ? 'active-link' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* // burger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* // mobile */}

      
      <ul
        className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-100 z-1 flex flex-col align-center justify-center items-center mx-auto'}
      >
        <li className='py-0 text-4xl h-auto'>
          <NavLink exact to='/' className={`active-link ${nav ? 'mobile-nav-link' : ''}`}>
            Home
          </NavLink>
        </li>
        <li className='py-0 text-4xl h-auto'>
          <NavLink to='/about' className={`active-link ${nav ? 'mobile-nav-link' : ''}`}>
            About
          </NavLink>
        </li>
        <li className='py-0 text-4xl h-auto'>
          <NavLink to='/portfolio' className={`active-link ${nav ? 'mobile-nav-link' : ''}`}>
            Portfolio
          </NavLink>
        </li>
        <li className='py-0 text-4xl h-auto'>
          <NavLink to='/timeline' className={`active-link ${nav ? 'mobile-nav-link' : ''}`}>
            Timeline
          </NavLink>
        </li>

        <li className='py-0 text-4xl w-100'>
          <NavLink to='/contact' className={`active-link ${nav ? 'mobile-nav-link' : ''}`}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[85%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center'
              href='https://www.linkedin.com/in/colin-douglas-068ba8262/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-67px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center' href='https://github.com/dpprdgls'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
