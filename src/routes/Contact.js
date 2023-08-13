import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form';
import {useEffect} from 'react';

export const Contact = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div> 
    <Navbar/>
    <Heroimg2 heading="CONTACT." text="Lets have a chat."/>
    <Form/>
    <Footer/>
</div>
  );
};



export default Contact