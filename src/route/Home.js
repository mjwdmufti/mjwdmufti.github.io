import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroImg/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Home