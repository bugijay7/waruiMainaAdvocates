import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutFirm from './components/AboutFirm'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Cta from './components/Cta'
import Service from './components/Service'
import ContactFormMap from './components/ContactFormMap'

function App() {

  return (
      <div>
       <Navbar /> 
       <Hero /> 
       <AboutFirm />
        <Profile />
        <Service />
        <Cta />
        <ContactFormMap />
        <Footer />
      </div>
     
  )
}

export default App