import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './portfolioItem';
import Title from './title';
function Portfolio() {
    return (
        
        <div className='flex flex-col md:flex-row items-center justify-center h-screen'>
          
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                
                {portfolio.map(project => (
                    <PortfolioItem 
                        title={project.title}
                        imgUrl={project.imgUrl}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
            
        </div>
    )
        
    
}

export default Portfolio;