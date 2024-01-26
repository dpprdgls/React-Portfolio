import React from 'react';
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Timeline from './components/timeline';
import Contact from './components/contact';
import Footer from './components/footer';




function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='App'>
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
