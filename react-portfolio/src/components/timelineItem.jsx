import React from 'react';

function TimelineItem({ year, title, duration, details}) {
    return (
        <div className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <div className='mb-10 ml-10'>
        <div className='absolute left-[-7px] w-3 h-3 bg-stone-300 rounded-full mt-1.5-left-1.5 border border-white' />
        <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md'>
            {year}
          </span>
          <h3 className='text-lg font-semibold text-stone-900'>
            {title}
          </h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400'>
            {duration}
          </div>
          <p className='my-2 text-base font normal text-stone-500'>{details}</p>
        </div>
        </div>
    </div>
  );
}

export default TimelineItem;