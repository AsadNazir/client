import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <div className='max-w-[1500px] mx-auto relative overflow-hidden'>
      <div className='border-red-500 border-2 w-[90%] lg:max-w-5xl max-w-3xl left-[50%] translate-x-[-50%] py-4 z-50 fixed top-0'>
        <Navbar />
      </div>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
