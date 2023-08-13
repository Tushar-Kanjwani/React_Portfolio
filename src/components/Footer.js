import "./FooterStyles.css"

import React from 'react'

import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
 
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                     <FaHome size={20} style={{color:"#fff",
                     marginRight:"2rem"}}/>
                     <div>
                        <p>123 Rizwani Muhalla,</p>
                        <p> Rohri, PAKISTAN</p>
                     </div>
                 </div>
                 <div className="phone">
                     <h4>
                        <FaPhone size={20} style={{color:"#fff",
                        marginRight:"2rem"}}/>
                        +92 316-3627575</h4>                 
                 </div>
                 <div className="email">
                     <h4>
                        <FaMailBulk  size={20} style={{color:"#fff",
                        marginRight:"2rem"}}/>
                        tusharkanjwani13@gmail.com</h4>                 
                 </div>
            </div>
            <div className="right">
                <h4>About my company</h4>
                <p>Im a react front-end developer.I create
                responive secure websites for my clients. </p>
                    <div className="social">
                    <FaFacebook   size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                    <FaInstagram  size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                    <FaLinkedin   size={30} style={{color:"#fff",marginRight:"1rem"}}/>

                    </div>
            </div>

        </div>
        
    </div>
  )
}

export default Footer