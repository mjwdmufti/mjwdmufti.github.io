import React from 'react'
import HeroImg2 from '../components/HeroImg2'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading='Contact'
        text='Lets have some chat.' />
        <Form/>
      <Footer />
    </div>
  )
}

export default Contact