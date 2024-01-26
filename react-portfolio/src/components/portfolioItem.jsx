import React from 'react';
function PortfolioItem({ title, imgUrl, stack, link}) {
    return (
        <div>
            <img 
            src='{imgUrl}' 
            alt='project image'
            className='w-full h-36 md:48 object-cover cursor-pointer'
            
            />
            <div className='w-full p-4'>
                <h3 classname='text-lg md:text-xl mb-2 md:m-3 font-semibold'>{title}</h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                    {stack.map(item => (
                        <span className='inline-block px-2 py-1 font semibold border-2 border-stone 900 rounded-md'>{item}</span>
                    ))}
                </p>
            </div>
        </div>

    )
        
    
}

export default PortfolioItem;