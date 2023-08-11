import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">

                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }}></FaHome>
                        <div>
                            <p>Islamabad, Pakistan.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }}></FaPhone>
                            +92 (334) 125-1257
                        </h4>

                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }}></FaMailBulk>
                            mjwdmufti@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>
                        About Me
                    </h4>
                    <p>Welcome to my portfolio! I'm Mhammad Jawad Mufti, a passionate
                        Front-End and WordPress Web Developer based in Pakistan.
                    </p>
                    <div className="social">

                        <NavLink to="https://www.facebook.com/mjwdmufti/" target="blank">
                            <FaFacebook size={20} style={{ color: '#fff', marginRight: '1rem' }}></FaFacebook>
                        </NavLink>
                        <NavLink to="https://twitter.com/im_jyd" target="blank">
                            <FaTwitter size={20} style={{ color: '#fff', marginRight: '1rem' }} path="" target="blank"></FaTwitter>
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/muhammad-jawad-mufti-1339681b5/" target="blank">
                            <FaLinkedin size={20} style={{ color: '#fff', marginRight: '1rem' }} path="" target="blank"></FaLinkedin>
                        </NavLink>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer