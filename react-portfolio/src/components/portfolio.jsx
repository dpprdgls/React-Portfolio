import React from 'react';
import Title from './title';
import portfolio from '../data/portfolio';
import PortfolioItem from './portfolioItem';

function Portfolio() {
    return (
        <div>
        <div>
        <h2>Portfolio</h2>
        </div>

        
        <div className='flex flex-col md:flex-row items-center justify-center h-screen'>
          
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    
                {portfolio.map(item => (
                    <PortfolioItem 
                        key={item.id}
                        title={item.title}
                        imgUrl={item.imgUrl}
                        stack={item.stack}
                        link={item.link}
                    />
                ))}
            </div>
            
        </div>
        </div>
    )
        
    
}

export default Portfolio;