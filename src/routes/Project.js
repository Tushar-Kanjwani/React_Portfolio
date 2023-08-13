import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';
import {useEffect} from 'react';

const Project = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div> 
    <Navbar/>
    <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
    <Work/>
    <PricingCard/> 

     <Footer/>
</div>
)
}

export default Project