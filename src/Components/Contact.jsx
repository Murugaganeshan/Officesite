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
        <div>
            <section class="py-3 py-md-5 py-xl-8" style={{backgroundColor:" rgb(17, 40, 51)"}}>
                <div class="container ">
                    <div class="row">
                        <div class=" container-fluid  text-center">
                            <h3 class="fs-5 mb-2 text-secondary text-uppercase ">Contact</h3>
                            <h2 class="display-5 mb-4 mb-md-5 mb-xl-8 contact" style={{ color: "white" }}>We're always on the lookout to work with new clients. Please get in touch in one of the following ways.</h2>
                        </div>
                    </div>
                </div>
                <div className=" container map">

                    <div class="container contactus " >
                        <div class="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
                            <div class="col-12 col-lg-6  ">
                                <div class=" overflow-hidden formPage">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                            <div className="col-12">
                                                <label htmlFor="fullname" className="form-label" style={{ color: "white" }}>Full Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} />
                                                {errors.fullname && <div className="text-danger">{errors.fullname}</div>}
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="email" className="form-label" style={{ color: "white" }}>Email <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                        </svg>
                                                    </span>
                                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                                                </div>
                                                {errors.email && <div className="text-danger">{errors.email}</div>}
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="phone" className="form-label" style={{ color: "white" }}>Phone Number</label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                        </svg>
                                                    </span>
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
                            <div class="col-12 col-lg-6 ">
                                <div class="row justify-content-xl-center">
                                    <div class="col-12 col-xl-11">
                                        <div class="mb-4 mb-md-5">
                                        <div class="col-12 col-lg-2 mb-3">
                                              <img src={location} alt="" className='img-fluid' style={{height:"40px"}}/>
                                        </div>
                                            <div>
                                                <h4 class="mb-2" style={{ color: "white" }}>Office</h4>
                                                <p class="mb-2" style={{ color: "grey" }}>Please visit us to have a discussion.</p>
                                                <hr class="w-50 mb-3 border-dark-subtle" />
                                                <address class="m-0 " style={{ color: "white" }} > 21, Pandian St, T V S Nagar, Madurai,Tamil Nadu 625003</address>
                                            </div>
                                        </div>
                                        <div class="row mb-sm-4 mb-md-5">
                                            <div class="col-12 col-sm-6">
                                                <div class="mb-4 mb-sm-0">
                                                <div class="col-12 col-lg-2 mb-3">
                                                     <img src={phone} alt="" className='img-fluid' style={{height:"40px"}}/>
                                                 </div>
                                                    <div>
                                                        <h4 class="mb-2" style={{ color: "white" }}>Phone</h4>
                                                        <p class="mb-2" style={{ color: "grey" }}>Please speak with us directly.</p>
                                                        <hr class="w-75 mb-3 border-dark-subtle" />
                                                        <p class="mb-0">
                                                            <a class="text-decoration-none" href="tel:+15057922430" style={{ color: "white" }}>+91 9876543210</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-6">
                                                <div class="mb-4 mb-sm-0">
                                                <div class="col-12 col-lg-2 mb-3">
                                                     <img src={email} alt="" className='img-fluid' style={{height:"40px"}}/>
                                                 </div>
                                                    <div>
                                                        <h4 class="mb-2" style={{ color: "white" }}>Email</h4>
                                                        <p class="mb-2" style={{ color: "grey" }}>Please write to us directly.</p>
                                                        <hr class="w-75 mb-3 border-dark-subtle" />
                                                        <p class="mb-0">
                                                            <a class=" text-decoration-none" href="mailto:demo@yourdomain.com" style={{ color: "white" }}>thamizhansolutions1630@gmail.com</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        <div class="col-12 col-lg-2 mb-3">
                                                     <img src={clock} alt="" className='img-fluid' style={{height:"40px"}}/>
                                                 </div>
                                            <div>
                                                <h4 class="mb-2" style={{ color: "white" }}>Opening Hours</h4>
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
                        </div>
                    </div>
                    <div className="map">
                    <iframe width="100%" height="400"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=21,%20Pandian%20Street,%20TVS%20nagar%20Madurai+(Thamizhan%20Solutions)&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>

                    </div>
                </div>
            </section>

            <Footer></Footer>

        </div>
    )
}
export default Contact