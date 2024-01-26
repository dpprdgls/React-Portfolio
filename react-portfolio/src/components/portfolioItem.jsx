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
                <p>
                    {stack.map(item => (
                        <span>{item}</span>
                    ))}
                </p>
            </div>
        </div>

    )
        
    
}

export default PortfolioItem;