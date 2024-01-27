import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Colin</h1>
            <h2 className='text-base md:text-xl mb-3 font-medium'>Web Developer</h2>
            <p className='text-sm max-w-xl mb-6 font-bold'>This is my bio </p>
        </div>
    )
        
    
}

export default Intro;