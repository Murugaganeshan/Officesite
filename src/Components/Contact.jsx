// import React, { useState } from 'react';
// import contactUs from "./Assest/contactuss.jpg";
// import style from "./contact.module.css"
// import { IoLocationOutline } from "react-icons/io5";
// import { IoMailOpenOutline } from "react-icons/io5";
// import { IoCallOutline } from "react-icons/io5";
// import Footer from './Footer';


// let Contact = () => {
//     const [formData, setFormData] = useState({
//         fullname: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         setFormData({
//             fullname: '',
//             email: '',
//             phone: '',
//             subject: '',
//             message: ''
//         });
//     };
//     return (
//         <div className={style.bb}>
//             <section className="bg-light py-3 py-md-5">
//                 <div className="container">
//                     <div className="row justify-content-md-center">
//                         <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
//                             <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">Get in Touch</h3>
//                             <h2 className="display-5 mb-4 mb-md-5 text-center">We're always on the lookout to work with new clients.</h2>
//                             <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="container rounded col-sm-12" style={{ backgroundImage: `url(${contactUs})`,  backgroundSize: 'cover', backgroundPosition: 'center' }}>
//                     <div className="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
//                         <div className="col-12 col-lg-6">
//                 <div className="col footer-col">
//                     <h1 class="display-4 text-center mb-5">Get In Touch</h1>
//                     <div className={style.Address}>
//                         <div> 
//                         <IoLocationOutline style={{fontSize:"30px",color:"red" }}/>
//                         </div>
//                         <p style={{textAlign:'start'}}> 2A, Vasantha Nagar 3rd st,
//                         Mahalkshmipuram <br></br> Madurai-03
//                         </p>
//                     </div><br />
//                     <div className={style.mail}>
//                         <div> 
//                         <IoMailOpenOutline  style={{fontSize:"30px",color:"green" }}/>
//                         </div>
//                         <p style={{textAlign:'start'}}> abc@gmail.com
//                         </p>
//                     </div><br />
//                     <div className={style.mail}>
//                         <div> 
//                         <IoCallOutline  style={{fontSize:"30px", color:"blue" }}/>
//                         </div>
//                         <p style={{textAlign:'start'}}> +91 9876543210
                       
//                         </p>
//                     </div><br />
//                 </div>
//                         </div>
//                         <div className="col-12 col-lg-6">
//                             <div className="row justify-content-xl-center">
//                                 <div className={`col-12 col-xl-11 col-sm-12 ${style.form}`}>
//                                     <div className="bg-white border rounded shadow-sm overflow-hidden">
//                                         <form onSubmit={handleSubmit}>
//                                             <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
//                                                 <div className="col-12">
//                                                     <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
//                                                     <input type="text" className="form-control" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required/>
//                                                 </div>
//                                                 <div className="col-12 col-md-6">
//                                                     <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
//                                                     <div className="input-group">
//                                                         <span className="input-group-text">
//                                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
//                                                                 <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
//                                                             </svg>
//                                                         </span>
//                                                         <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-12 col-md-6">
//                                                     <label htmlFor="phone" className="form-label">Phone Number</label>
//                                                     <div className="input-group">
//                                                         <span className="input-group-text">
//                                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
//                                                                 <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
//                                                             </svg>
//                                                         </span>
//                                                         <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange}/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <label htmlFor="subject" className="form-label">Subject <span className="text-danger">*</span></label>
//                                                     <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} required/>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
//                                                     <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <div className="d-grid">
//                                                         <button className={`btn btn-primary btn-lg ${style.but}`} type="submit">Send Message</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer></Footer>
//         </div>
//     );
// };
// export default Contact;

import { TiLocation } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Assets/Css/Contact.css"
import map from "./Assest/ml.jpg"
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
                    <div class="container text-center shadow-lg p-3  my-5 rounded  contact"  data-aos="fade-down">
                        <div className="row my-2">
                            <h1>Get in Touch</h1>
                        </div>
                        <div class="row my-5">
                            <div class="col">
                                <TiLocation size={40} color="red"/>
                                <div className="col my-3">
                                    <span class="fw-bolder">Address : </span><span class="fw-lighter">Madurai</span>
                                </div>
                            </div>
                            <div class="col">
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
                            <div className="col-lg-5 col-md-6 col-sm-10 col-12 form my-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded"   data-aos="fade-right">
                                <h1 className="text-center my-3">Contact Us</h1>
                                <form>
                                    <div className="form-group my-3"> 
                                        <input name="user_name" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-group my-3">
                                        <input name="user_email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group my-3">
                                        <input name="user_email" className="form-control" placeholder="Phone"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea style={{ width:"100%", padding:"8px"}} name="message" placeholder="Text your message here..." rows="5"></textarea>
                                    </div>
                                    <div className="text-center my-4"> 
                                        <button type="button" className="btn btn-primary">Send Message</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-10 col-12 my-3 d-flex justify-content-center "   data-aos="fade-left">
                                <iframe className="rounded shadow-lg p-3 mb-4 bg-body-tertiary " width="590" height="500" frameborder="0" scrolling="no"  marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=21,%20Pandian%20street,%20Alagapa%20nagar,%20madurai%20%20Madurai+(Thamizhan%20Solutions)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.easybooking.eu/'></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=0bb7e3051ed0ddf3c1990abbbfd9405a87385624'></script>
                            </div>
                        </div> 
                    </div>
                
                        <Footer></Footer>
              </div>
    )
}
export default Contact
