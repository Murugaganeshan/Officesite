import { TiLocation } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Assets/Css/Contact.css"
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { UserFormUpload } from "../Authiapis/backendcall"
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import location from "../Assets/Images/locationlogo.png"
import phone from "../Assets/Images/phonelogo.png"
import email from "../Assets/Images/emaillogo.png"
import clock from "../Assets/Images/clocklogo.png"

let Contact = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Clear any previous errors
            setErrors({});
            console.log(formData)

            const backendsend = await UserFormUpload(formData).then((res) => {

                toast.info(res.message)
                
            }).catch((err) => {
                console.log('err', err)
            })

            // Form submission logic goes here
            console.log("Form submitted successfully");
        } else {
            setErrors(validationErrors);
        }
    };
    const validateForm = (data) => {
        let errors = {};

        // Full Name validation
        if (!data.fullname.trim()) {
            errors.fullname = 'Full Name is required';
        }

        // Email validation
        if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Invalid Email address';
        }

        // Phone validation (optional)
        if (!data.phone) {
            errors.phone = 'Phone Number is required';
        } else if (!/^\d{10}$/.test(data.phone)) {
            errors.phone = 'Invalid Phone number';
        }

        // Subject validation
        if (!data.subject.trim()) {
            errors.subject = 'Subject is required';
        }

        // Message validation
        if (!data.message.trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    };
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
  
    return (
        <div className="">
            <section class="py-3 py-md-5 py-xl-8" style={{backgroundColor:" rgb(17, 40, 51)"}}>
                <div class="container ">
                    <div class="row">
                        <div class="   text-center contactpage pb-3" data-aos="fade-in">
                            <h3 class="fs-5 mb-2  contactTitle text-uppercase ">Contact Us</h3>
                            <h2 class="display-5 mb-4 mb-md-5 mb-xl-8 contact contactSubTitle" >We're always on the lookout to work with new clients. Please get in touch in one of the following ways.</h2>
                        </div>
                    </div>
                </div>
                <div className=" container map">

                    <div class="container contactus " >
                        <div class="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
                            <div class="col-12 col-lg-6  ">
                                <div class=" overflow-hidden formPage" data-aos="fade-right">
                                    <form onSubmit={handleSubmit} >
                                        <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                            <div className="col-12">
                                                <label htmlFor="fullname" className="form-label" style={{ color: "white" }}>Full Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} />
                                                {errors.fullname && <div className="text-danger">{errors.fullname}</div>}
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="email" className="form-label" style={{ color: "white" }}>Email <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    
                                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                                                </div>
                                                {errors.email && <div className="text-danger">{errors.email}</div>}
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="phone" className="form-label" style={{ color: "white" }}>Phone Number</label>
                                                <div className="input-group">
                                                    
                                                    <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                                </div>
                                                {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="subject" className="form-label" style={{ color: "white" }}>Subject <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                                                {errors.subject && <div className="text-danger">{errors.subject}</div>}
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="message" className="form-label" style={{ color: "white" }}>Message <span className="text-danger">*</span></label>
                                                <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleChange} ></textarea>
                                                {errors.message && <div className="text-danger">{errors.message}</div>}
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-lg" type="submit">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6"  data-aos="fade-left">
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto mb-5">
                                        <img src={location} alt="" className='img-fluid' style={{ height: "40px" }} />
                                    </div>
                                    <div className="col mx-3">
                                        <h4 className="mb-2 mt-4" style={{ color: "white" }}>Office</h4>
                                        <p className="mb-2" style={{ color: "grey" }}>Please visit us to have a discussion.</p>
                                        <hr className="w-50 mb-3 border-dark-subtle" />
                                        <address className="m-0" style={{ color: "white" }}>21, Pandian St, T V S Nagar, Madurai, Tamil Nadu 625003</address>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto mb-5">
                                         <img src={phone} alt="" className='img-fluid' style={{height:"40px"}}/>
                                    </div>
                                    <div className="col mx-3">
                                        <div>
                                                        <h4 class="mb-2 mt-4" style={{ color: "white" }}>Phone</h4>
                                                        <p class="mb-2" style={{ color: "grey" }}>Please speak with us directly.</p>
                                                        <hr class="w-50 mb-3 border-dark-subtle" />
                                                     
                                                        <div className="number">
                                                            <p style={{color:"white"}}>+91 8870854141</p>
                                                            <p style={{color:"white"}}>+ 04524207281</p>
                                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto mb-5">
                                            <img src={email} alt="" className='img-fluid' style={{height:"40px"}}/>
                                    </div>
                                    <div className="col mx-3">
                                                     <div>
                                                        <h4 class="mb-2 mt-4" style={{ color: "white" }}>Email</h4>
                                                        <p class="mb-2" style={{ color: "grey" }}>Please write to us directly.</p>
                                                        <hr class="w-50 mb-3 border-dark-subtle" />
                                                        <p class="mb-0">
                                                            <a class=" text-decoration-none" href="mailto:demo@yourdomain.com" style={{ color: "white" }}>thamizhansolutions1630@gmail.com</a>
                                                        </p>
                                                    </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto mb-5">
                                             <img src={clock} alt="" className='img-fluid' style={{height:"40px"}}/>
                                    </div>
                                    <div className="col mx-3">
                                                <h4 class="mb-2 mt-4" style={{ color: "white" }}>Opening Hours</h4>
                                                <p class="mb-2" style={{ color: "grey" }}>Explore our business opening hours.</p>
                                                <hr class="w-50 mb-3 border-dark-subtle" />
                                                <div class="d-flex mb-1">
                                                    <p class=" fw-bold mb-0 me-5" style={{ color: "white" }}>Mon - Sat</p>
                                                    <p class=" mb-0" style={{ color: "white" }}>9am - 6.30pm</p>
                                                </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    <div className="map">
                    <iframe width="100%" height="400"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=21,%20Pandian%20Street,%20TVS%20nagar%20Madurai+(Thamizhan%20Solutions)&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>

                    </div>
                </div>
            </section>


        </div>
    )
}
export default Contact