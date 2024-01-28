import React from 'react';
import timeline from '../data/timeline';

import TimelineItem from './timelineItem';


function Timeline() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center h-screen'>
            <div className='w-full md:w-7/12'>
              
                <h1 className='text-4xl mt-8 mb-4'>Timeline</h1>
            {timeline.map(item => (
                <TimelineItem 
                key={item.id}
                year={item.year} 
                title={item.title}
                duration={item.duration}
                details={item.details}
            />
        ))}

{/* resume button */}
        <button className="text-gray-600 border-2 rounded-md border-orange-600 px-8 py-3 my-4 flex items-center hover:bg-orange-600 hover:text-white'">
          <a className="button" href="../assets/Resume/ResumeOfficial.pdf" download="ResumeOfficial.pdf">
            Download Resume
          </a>
        </button>


            </div>
        </div>
    )
        
    
}

export default Timeline;