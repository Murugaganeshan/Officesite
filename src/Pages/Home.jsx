import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Service  from "../Components/Service";
import Carrers from "../Components/Carrers";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Contactpage from "../Components/Contactpage";
import Footerdemo from "../Components/Footerdemo";
function Homepage(){
    return(
        <div className="homepage">
           {/* <Home/> */}
         <About/>
            <Service/>
            
            <Carrers/>
            <Contact/> 
            <Footer/>
            {/* <Footerdemo/> */}

        </div>
    )
}
export default Homepage