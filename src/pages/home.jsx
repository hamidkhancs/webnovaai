import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from './about'
import Projects from './projects'
import Skills from './Skills'
import Contact from './Contcat'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        
        <Contact />
    </div>
  )
}

export default Home
