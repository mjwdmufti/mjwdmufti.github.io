import React, { Component } from 'react'
import './HeroImg2Style.css'
import IntroImg from '../Assests/Hero Img Project.jpg'

class HeroImg2 extends Component {
    render() {
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <img alt='projectimage' className='project-img' src={IntroImg} />
                    <div className='content'>
                        <h1>{this.props.heading}</h1>
                        <p>{this.props.text}</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default HeroImg2