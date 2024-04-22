

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

              <div style={{backgroundColor:"rgb(33, 37, 47)"}}>
               
                 <div className="container">
                    <h1>dkfjksf</h1>

                 </div>
                
                        <Footer></Footer>
              </div>
    )
}
export default Contact
