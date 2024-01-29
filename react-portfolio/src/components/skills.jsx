import React from 'react';
import Hills from '/assets/hills.jpg';
function Skills(){
    return (
        <div className='flex items-center justify-center flex-col pt-10 pb-10 h-screen'>
      <div className='flex flex-col md:flex-row items-center md:items-start'>
        <img src={Hills} alt='Me in nature' className='w-80 h-auto mb-6 md:mr-10 mt-20 md:mt-0' />

        <div className='text-center md:text-left'>
          <p className='text-orange-400'>These are some of my</p>
          <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-gray-500'>Skills and Proficiencies</h1>
          <h2 className='text-base md:text-xl mb-3 font-medium text-gray-400'>for front and back-end development.</h2>
          <ul className='text-sm max-w-xl mb-6 font-light'><h1>Front-End</h1>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
            
        </ul>
          <ul className='text-sm max-w-xl mb-6 font-light'><h1>Back-End</h1>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>APIs</li>
            <li>REST</li>
            <li>GraphQL</li>
            
          </ul>
          {/* resume button */}
        <button className="text-gray-600 border-2 rounded-md border-orange-600 px-8 py-3 my-4 flex items-center hover:bg-orange-600 hover:text-white'">
          <a className="button" href="../assets/Resume/ResumeOfficial.pdf" download="ResumeOfficial.pdf">
            Download Resume
          </a>
        </button>
        </div>
      </div>
    </div>
    )
}

export default Skills;