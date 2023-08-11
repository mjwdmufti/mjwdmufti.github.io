import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from '../Assests/Hero Img Home.jpg'
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img alt='introimg' className='intro-img' src={IntroImg}/>
        </div>
        <div className='content'>
            <p>Hi! I am a Passionate</p>
            <h1>Web Developer.</h1>
            <div >
                <Link to="/project" className='btn'>Project</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg