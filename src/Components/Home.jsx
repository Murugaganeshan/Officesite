import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Assets/Css/home.css"
import hero from './Assest/lp.jpg';
import TweenLite from 'gsap'; 
import Circ from 'gsap';
import { Link } from 'react-router-dom';
import About from "./About"



const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

 

    return (
        <div > 
     
        <About/>
        </div>
    );
};

export default Home;