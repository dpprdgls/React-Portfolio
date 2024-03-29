
import React, { useEffect, useState }  from 'react';
import Intro from './components/intro';
import About from './components/about';
import Portfolio from './components/portfolio';
import Timeline from './components/timeline';
import Skills from './components/skills'
import Contact from './components/contact';
import Footer from './components/footer';
import {Routes, Route} from 'react-router-dom';;
import NavBar from './components/navbar';


function App() {
  return (
    <div>
      <NavBar/>
      <div className='bg-white text-stone-900 min-h-screen font-inter max-w-5xl w-11/12 mx-auto'>
        
        <Routes>
          <Route path='/' element={<Intro />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/timeline' element={<Timeline/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
        
        <Footer />
      </div>
    </div>
  )
}

export default App;
