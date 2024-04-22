

import { TiLocation } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Assets/Css/Contact.css"
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


let Contact=()=>{

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return(


              <div>
                <div style={{backgroundColor:"rgb(33, 37, 47)"}}>
                <div className="container p-2 text-center  "> 
                 <h1 style={{color:'black'}} className="get">Get in touch</h1>
                 <h5 style={{color:'grey'}}>Want to get in touch? We'd love to hear from you. Here's how <br/>You can reach us.</h5>
              <div style={{backgroundColor:"rgb(33, 37, 47)"}}>
               
                 <div className="container">
                    <h1>dkfjksf</h1>


                 </div>
                
              </div>
              </div>
              </div>
              <Footer></Footer>

              </div>
    )
}
export default Contact
