import React from "react"
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import {useEffect} from 'react';

const Home = () =>{
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
    return (
        <div> 
            <Navbar/>
            <Heroimg/>
            <Work/>
            <Footer/>
        </div>
    );
};

export default Home