import React from 'react'
import HeroImg2 from '../components/HeroImg2'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading = 'About' 
      text = 'I am a friendly Front-End & WordPress Developer.'/>
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About