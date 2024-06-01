import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import logo from "../Assets/Images/finalLogo.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { RiWhatsappFill } from "react-icons/ri";
import "../Assets/Css/Footer.css" 
import { useState } from "react";

let Footer=()=>{
  const closeMenu=()=> setClick(false)
  const [click, setClick] = useState(false);


    return(

    <div className='container-fluid footer'>

      
      <div className="row">
        <div class='col-12 col-lg-4  py-4 py-md-5 py-xxl-8   footerBlock'>
          <div class="row h-70 align-items-end justify-content-center">
            <div class="col-12 col-md-11 col-xl-10 footer-con">
              <div class="footer-logo-wrapper m-3">
               
                  <img src={logo} alt="Company Logo" width="179" height="60"/>
                
              </div>
              <div className="col footer-col">
                <h1> Follow Us </h1>
                    <div className="social-links my-4">
                      <div className="social-div">
                       <a href="/"><FaFacebook/> </a> <h6>jdfjskf</h6>
                       </div>
                       <a href="/"><FaInstagram/> </a>
                       <a href="/"><FaTwitter/> </a>
                       <a href="/"><FaWhatsapp/> </a>
                       <a href="https://www.linkedin.com/company/101978309/admin/inbox/thread/2-NmRmNTc4NWUtZGRiZS00Y2IwLTgwNDktNWExNmNiMTNkODc0XzAxMA==/"><FaLinkedin/></a>
                    </div>
                </div>
                    
           {/* <div class="address-wrapper mt-5">
                <address class="mb-2 m-1 text-white fw-bold">Address  :   <span class="fw-light" style={{color:'grey'}}>21, Pandian St, T V S Nagar, Madurai, <br/> Tamil Nadu 625003</span> </address>
                <p class="mb-2">
                  <a class="link-light text-decoration-none fw-bold" href="#">Phone :   <span class="fw-light" style={{color:'grey'}}>+91 9876543210</span> </a>
                </p>
                <p class="mb-0">
                  <a class="link-light text-decoration-none fw-bold" href="#">Email    :   <span class="fw-light" style={{color:'grey'}}>thamizhan1630@gmail.com</span> </a>
                </p>
              </div> */}
              {/* <iframe width="350" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=453&amp;height=400&amp;hl=en&amp;q=%2021,%20Pandian%20Street,%20TVS%20Nagar,%20Madurai%20Madurai+(Thamizhan%20Solutions)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.acadoo.de/'></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=0d38e54c9e178e1c131e8fc1c513d29279b1afe9'></script> */}
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 footerRight py-4 py-md-5 py-xxl-8 ">
          <div class="row justify-content-center">
            <div class="col-12 col-md-11 col-xxl-10">
              <div class="row row-cols-md-3 row-cols-sm-1 row-cols-1 gy-4 gy-sm-0">
                <div class="col-sm-3">
                  <div>
                    <h4 class="widget-title mb-4 footerTitle">Services</h4>
                    <ul class="list-unstyled service">
                      <li class="mb-3">
                      <a href="/mobileapp"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Mobile Development </a>
                      </li>
                      <li class="mb-3">
                      <a href="/webdevelopment"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Web Development </a>
                      </li>
                      <li class="mb-3">
                      <a href="/uiux"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> UI/UX Development </a>
                      </li>
                      <li class="mb-3">
                      <a href="/aidevelopment"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> AI Development </a>

                      </li>
                      <li class="mb-3">
                      <a href="/cripto"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Crypto Trading </a>
                      </li>
                      <li class="mb-3">
                        <a href="/neft"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> NFT Marketing </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-6 col-sm-3">
                  <div>
                    <h4 class="widget-title mb-4 footerTitle">Company</h4>
                    <ul class="list-unstyled company">
                    <li className="mb-3">
              {/* <Link
            
              exact
                to="/"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClassName="active"
                className="link-secondary text-decoration-none footerSubTitle"
                onClick={closeMenu}
              >
             <GoArrowRight />  Home
              </Link> */}


              <a href="/"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Home</a>
            </li>
           
            <li className="mb-3">
            {/* <Link
                exact
                to="/about"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                activeClassName="active"
                className="link-secondary text-decoration-none footerSubTitle"
                onClick={closeMenu}
              >
              <GoArrowRight /> About
              </Link> */}
              
              <a href="/about"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> About</a>
            </li>
            <li className="mb-3">
            {/* <Link
                exact
                to="/service"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClassName="active"
                className="link-secondary text-decoration-none footerSubTitle"
                onClick={closeMenu}
              >
              <GoArrowRight /> Service
              </Link> */}
               <a href="/service"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Service</a>
            </li>
            <li className="mb-3">
            {/* <Link
                exact
                to="/career"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClassName="active"
                className="link-secondary text-decoration-none footerSubTitle"
                onClick={closeMenu}
              >
               
               <GoArrowRight /> Careers
              </Link> */}
               <a href="/career"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Career</a>
            </li>
            <li className="mb-3">
            {/* <Link
            
                exact
                to="/contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClassName="active"
                className="link-secondary text-decoration-none footerSubTitle"
                onClick={closeMenu}
              >
              <GoArrowRight/> Contact
              </Link> */}
               <a href="/contact"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Contact</a>
            </li>
            <li className="mb-3">

            <a href="/contact"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Terms & Condition</a>
            </li>
            <li className="mb-3">

            <a href="/contact"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Privacy Policy</a>
            </li>





                       {/* <li class="mb-3">
                        <Link to="/" className="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Home</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/about" className="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> About</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/service" className="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Services</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/careers" className="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Careers</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/contactus" className="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Contact Us</Link>
                      </li>  */}
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="widget mx-4">
                    <h4 class="widget-title mb-4 footerTitle">Our Newsletter</h4>
                    <p class="mb-4    footerSubTitle" >Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.</p>
                    <form action="#!">
                      <div class="row gy-4">
                        <div class="col-12">
                          <div class="input-group">
                           
                            <input type="email" class="form-control" id="email-newsletter"  placeholder="email" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-grid">
                            <button class="btn btn-primary" type="submit">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              <div class="row mt-6 border-top border-light-subtle my-5 text-start">
                <div class="footer-copyright-wrapper foot my-4">
                  &copy; copyrights <span className="fw-bold companyName">Thamizhan Solutions</span> All Rights Reserved.
                </div>        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
                         
export default Footer