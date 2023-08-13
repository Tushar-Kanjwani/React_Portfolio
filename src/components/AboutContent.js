import { Link } from "react-router-dom"
import "./AboutContentStyle.css"

import React from 'react'
import About_img1 from "../assets/About_img.png";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm Tushar Kanjawni, A motivated and passionate Computer Systems Engineering student with a strong desire to build a career in Computer Systems Engineering.
            </p>
            <Link to="/content">
                <button className="btn">Content</button>
            </Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={About_img1}
                    className="img"
                    alt="true"/>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default AboutContent