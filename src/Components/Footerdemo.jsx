
        import React from "react";
        import "../Assets/Css/Footerdemo.css";
        import AOS from "aos";
        import "aos/dist/aos.css";
        import { useEffect } from "react";
        import logo from "../Assets/Images/finalLogo.jpg"
        import { GoArrowRight } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
        
        const Footerdemo = () => {
        
            useEffect(() => {
                AOS.init({
                    duration: 2000,
                    easing: "ease-in-out",
                    once: true,
                });
            }, []);
        
          return (
            <div> 
         
            <footer className="footer-section " >
              
      <div className="row">
        <div class='col-12 col-lg-4    footerBlock'>
          <div class="row h-70 align-items-end justify-content-center">
            <div class="col-12 col-md-11 col-xl-10 footer-con">
              <div class="footer-logo-wrapper m-3">
               
                  <img src={logo} alt="Company Logo" width="179" height="60"/>
                
              </div>
              <div className="col footer-col mx-5">
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
         


              <a href="/"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Home</a>
            </li>
           
            <li className="mb-3">
          
              
              <a href="/about"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> About</a>
            </li>
            <li className="mb-3">
          
               <a href="/service"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Service</a>
            </li>
            <li className="mb-3">
          
               <a href="/career"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Career</a>
            </li>
            <li className="mb-3">
        
               <a href="/contact"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Contact</a>
            </li>
            <li className="mb-3">

            <a href="/contact"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Terms & Condition</a>
            </li>
            <li className="mb-3">

            <a href="/contact"  class="link-secondary text-decoration-none footerSubTitle"><GoArrowRight /> Privacy Policy</a>
            </li>





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
              
           
            </div>
          </div>
        </div>
      </div>
                <hr className="hhh"/>
                <div className="footer-bottom">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="copy-rights">Copy Rights © 2024 <span className="footerCryptoMania"> Crypto ManiA </span> All Rights Reserved</p>
                    </div>
                    <div className="col-md-6 text-end">
                      <p className="privacy-policy">User Terms & Conditions |  Privacy Policy</p>
                    </div>
                  </div>
                </div>
            </footer>
            </div>
          );
        };
        
        export default Footerdemo;
