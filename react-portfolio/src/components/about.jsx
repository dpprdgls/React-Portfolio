

import React from 'react';
import Me from '/assets/outside.jpg';

function About() {
  return (
    <div className='flex items-center justify-center flex-col pt-10 pb-10 h-screen'>
      <div className='flex flex-col md:flex-row items-center md:items-start'>
        <img src={Me} alt='Me in nature' className='w-80 h-auto mb-6 md:mr-10 mt-20 md:mt-0' />

        <div className='text-center md:text-left'>
          <p className='text-orange-400'>Hello, my name is</p>
          <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-gray-500'>Colin Douglas</h1>
          <h2 className='text-base md:text-xl mb-3 font-medium text-gray-400'>and I always want to learn.</h2>
          <p className='text-sm max-w-xl mb-6 font-light'>
            My background is a bit different from the usual developer who majored in Computer Science in college. I
            studied Art and Digital Media at the University of California Santa Barbara. From there I worked as a
            professional photographer, and then my love of cars led me into a career in Automotive Manufacturing. Working
            in the Automotive Industry started my interest in manufacturing, robotics, and optimization, as well as the
            various challenges that arise from the combination.
          </p>
          <p className='text-sm max-w-xl mb-6 font-light'>
            I started reading about Lean Manufacturing, Six Sigma, and the Toyota Production System. I learned to code in
            Python so I could analyze data and look for trends that could improve the process. That initial “Hello World”
            sparked even more curiosity about IT and Web Development.
          </p>
          <p className='text-sm max-w-xl mb-6 font-light'>
            This path of curiosity led me to UC Berkeley’s EdX Full Stack Developer Bootcamp. In this bootcamp, I have
            learned about the wonders of JavaScript, Express.js, Node.js, MongoDB, SQL, React.js, jQuery, HTML, and CSS.
            They say the more you know, the more you realize how much you don’t know.
          </p>
          <p className='text-sm max-w-xl mb-6 font-light'>
          I didn’t expect to learn everything there is to know in such a short period of time, but I have put a small dent in the vast tech-stack for now. I fully intend to continue to develop my skills in these areas while also working to get AWS certified. This entire experience has given me an immense respect for the digital realm the engineers before me have created and I hope to contribute to that effort in the future. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

