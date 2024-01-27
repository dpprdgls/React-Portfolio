import React from 'react';
import Title from './title';
import { Link } from'react-router-dom';
function Contact() {
    return (
        <div>
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form 
                    action='https://getform.io/f/983727c2-319a-4857-b4a5-664bc04c4cec'
                    method='POST'
                    className='flex flex-col w-full md:w-7/12'
                    >
                        <Title>Contact</Title>
                        <input
                            type='text'
                            name="name"
                            placeholder='Name'
                            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        />
                        <input
                            type='text'
                            name="email"
                            placeholder='Email Address'
                            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        />
                        <textarea
                            name='Message'
                            id='Message' 
                            rows='10'
                            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none '
                        />
                        <button
                            type='button'
                            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white
                            bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md'
                        >
                            Let's get in touch!
                        </button>

                        
                        
                </form>
            </div>
        </div>
        </div>
    )
        
    
}

export default Contact;