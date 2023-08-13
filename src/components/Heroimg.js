import "./HeroimgStyle.css";

import React from 'react'

import HeroImg from "../assets/hero_img.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img1" src={HeroImg} alt="Hero_Img"/>
        </div>
        <div className="content">
            <p> HI, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light ">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Heroimg