import React from "react";

import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Contactpage from "../Components/Contactpage";

function Contactpages(){
    return(
        <div className="homepage">
            
            <Contactpage/>
            <Contact/>
            <Footer/>
            

        </div>
    )
}
export default Contactpages