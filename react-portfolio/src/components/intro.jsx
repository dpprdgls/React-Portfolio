import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from'react-router-dom';
function Intro() {
    return (
        <div className='flex items-center justify-center flex-col pt-20 pb-6'>
            <div>
                <p className='text-orange-600'>Hello, my name is</p>
                <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-gray-500'>Colin Douglas</h1>
                <h2 className='text-base md:text-xl mb-3 font-medium text-gray-400'>I am a Full-Stack Developer</h2>
                <p className='text-sm max-w-xl mb-6 font-bold'>I specialize in building and designing unique digital experiences. Currently I am focused on building responsive full-stack web applications</p>
            </div>
            <div>
                <Link to='/portfolio'>
                    <button className='text-gray-600 border-2 rounded-md border-orange-600 px-8 py-3 my-4 flex items-center hover:bg-orange-600 hover:text-white'>
                        <span>View Work</span>
                        <HiArrowNarrowRight className='ml-2'/>
                    </button>
                </Link>
            </div>
        </div>
    )
        
    
}

export default Intro;