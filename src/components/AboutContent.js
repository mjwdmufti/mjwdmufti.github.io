import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';
import pic1 from "../Assests/react1.jpg";
import pic2 from "../Assests/react2.webp";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a WordPress & Front-End web developer specialized in react framework, 
                I create responsive and secure websites for my clients.
                With a keen eye for creativity and a love for problem-solving, I'm 
                    on a mission to craft meaningful and visually stunning web experiences. 
                    Through my work, I strive to create user-friendly websites that not only 
                    meet clients' needs but also leave a lasting impression on their audiences. 
                    Join me on this exciting journey as we turn ideas into captivating online 
                    realities.</p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img className="img" src={pic1} alt="img1"/>
                </div>
                <div className="img-stack bottom">
                    <img className="img" src={pic2} alt="img1"/>
                </div>

            </div>
        </div>
        
    </div>
  )
}
export default AboutContent;
