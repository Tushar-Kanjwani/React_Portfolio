import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import AboutContent from '../components/AboutContent';
import {useEffect} from 'react';


export const About = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div> 
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="Im a firendly Front-End Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}


export default About