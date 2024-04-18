

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
                <div className="container p-2 text-center  "> 
                 <h1 style={{color:'black'}} className="get">Get in touch</h1>
                 <h5 style={{color:'grey'}}>Want to get in touch? We'd love to hear from you. Here's how <br/>You can reach us.</h5>
                 </div>
                    <div class="container text-center shadow-lg p-3 rounded my-5 contact"  data-aos="fade-down">
                       
                        <div className="row my-2">
                          
                        </div>
                        <div class="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 my-5">
                            <div class="col">
                                <TiLocation size={40} color="red"/>
                                <div className="col my-3">
                                    <span class="fw-bolder">Address : </span><span class="fw-lighter">Madurai</span>
                                </div>
                            </div>
                            <div class="col phone">
                                <FaPhoneAlt size={40} color="blue"/>
                                <div className="col my-3">
                                <span class="fw-bolder">Phone : </span><span class="fw-lighter"> 9876543210</span>
                                </div>
                            </div>
                            <div class="col">
                                <MdEmail size={40} color="green"/>
                                <div className="col my-3">
                                <span class="fw-bolder">Email : </span><span class="fw-lighter">abc@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>      
                    <div className="container">
                        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 justify-content-center"> 
                            <div className="col-lg-5 col-md-6 col-sm-10 col-12 form my-3 shadow-lg p-5 mb-5 bg-body-tertiary rounded"   data-aos="fade-right">
                                <h1 className="text-center mb-5 ">Contact Us</h1>
                                <form className="my-4">
                                    <div className="form-group my-3"> 
                                        <input name="user_name" className="form-control " placeholder="Name"/>
                                    </div>
                                    <div className="form-group my-3">
                                        <input name="user_email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group my-3">
                                        <input name="user_email" className="form-control" placeholder="Phone"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea style={{ width:"100%", padding:"8px"}} className="form-control contact-form" name="message" placeholder="Text your message here..." rows="5"></textarea>
                                    </div>
                                    <div className="text-center my-4"> 
                                        <button type="button" className="btn btn-primary my-2 sm">Send Message</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-10 col-12 my-3 d-flex justify-content-center "   data-aos="fade-left">
                                <iframe className="rounded shadow-lg p-3 mb-4 bg-body-tertiary " width="590" height="595" frameborder="0" scrolling="no"  marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=21,%20Pandian%20street,%20Alagapa%20nagar,%20madurai%20%20Madurai+(Thamizhan%20Solutions)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.easybooking.eu/'></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=0bb7e3051ed0ddf3c1990abbbfd9405a87385624'></script>
                            </div>
                        </div> 
                    </div>
                
                        <Footer></Footer>
              </div>
    )
}
export default Contact
