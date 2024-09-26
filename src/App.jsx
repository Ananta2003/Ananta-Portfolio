import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footor from './components/Footor'
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='relative h-full overflow-y-auto '>
      <div className='fixed insert-0 bg-fixed bg-cover bg-center '>
      </div>
      <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto '>
        <Hero />
        <Navbar />
        <Projects/>
        <About/>
        <Experience/>
        <Education/>
        <Contact/>
        <Footor/>
      </div>
    </div>

  )
}

export default App
