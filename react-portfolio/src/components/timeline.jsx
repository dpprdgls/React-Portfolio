import React from 'react';
import timeline from '../data/timeline';
import timelineItem from './timelineItem';
import TimelineItem from './timelineItem';
import Title from './title';

function Timeline() {
    return (
        <div className='flex flex-col md:flex-row justify-center my-20'>
            <div className='w-full md:-7/12'>
                <Title>Timeline</Title>
            {timeline.map(item => (
                <TimelineItem
                year={item.year} 
                title={item.title}
                duration={item.duration}
                details={item.details}
            />
        ))}
            </div>
        </div>
    )
        
    
}

export default Timeline;