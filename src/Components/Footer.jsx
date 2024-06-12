import logo from "../Assets/Images/finalLogo.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import "../Assets/Css/Footer.css" 
import { useState } from "react";
import arrow from "../Assets/Images/arrow.png"
import copyright from "../Assets/Images/copyright.png"
import faceBook from "../Assets/Images/faceBook.png"
import insta from "../Assets/Images/insta.png"
import twitter from "../Assets/Images/twitter.png"
import whatsapp from "../Assets/Images/whatsapp.png"
import linkedin from "../Assets/Images/linkedin.png"

let Footer=()=>{
  const closeMenu=()=> setClick(false)
  const [click, setClick] = useState(false);


    return( 
    <div className='footer container-fluid'>    
      <div className="row footerBack">
        <div class='col-12 col-lg-4  py-4 py-md-5 py-xxl-8   footerBlock'>
          <div class="row h-70 align-items-end justify-content-center">
            <div class="col-12 col-md-11 col-xl-10 footer-con">
              <div class="footer-logo-wrapper m-3">
               
                  <img src={logo} alt="Company Logo" width="179" height="60"/>
                
              </div>
              <div className="col footer-col mx-5">
                <h1> Follow Us </h1>
                    <div className="social-links my-4">
                      <div className="social-div">
                       <a href="/"><img src={faceBook} alt="" className="img-fluid" style={{height:"46px"}}/> </a> <h6>Facebook</h6>
                       </div>
                       <div className="social-div">
                       <a href="/"><img src={insta} alt="" className="img-fluid" style={{height:"46px"}}/>  </a><h6>Instagram</h6>

                       </div>
                       <div className="social-div">
                       <a href="/"><img src={twitter} alt="" className="img-fluid" style={{height:"46px"}}/> </a><h6>Twitter</h6>
                       </div>
                       <div className="social-div">
                       <a href="/"><img src={whatsapp} alt="" className="img-fluid" style={{height:"46px"}}/> </a><h6>Whatsapp</h6>
                       </div>   
                       <div className="social-div">
                       <a href="https://www.linkedin.com/company/101978309/admin/inbox/thread/2-NmRmNTc4NWUtZGRiZS00Y2IwLTgwNDktNWExNmNiMTNkODc0XzAxMA==/"><img src={linkedin} alt="" className="img-fluid" style={{height:"46px"}}/> </a><h6>Linkedin</h6>
                       </div>                   
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
                      <a href="/mobileapp"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Mobile Development </a>
                      </li>
                      <li class="mb-3">
                      <a href="/webdevelopment"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Web Development </a>
                      </li>
                      <li class="mb-3">
                      <a href="/uiux"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> UI/UX Development </a>
                      </li>
                      <li class="mb-3">
                      <a href="/aidevelopment"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> AI Development </a>

                      </li>
                      <li class="mb-3">
                      <a href="/cripto"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Crypto Trading </a>
                      </li>
                      <li class="mb-3">
                        <a href="/neft"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> NFT Marketing </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-6 col-sm-3">
                  <div className="mx-1">
                    <h4 class="widget-title mb-4 footerTitle">Company</h4>
                    <ul class="list-unstyled company">
                    <li className="mb-3">
              <a href="/"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Home</a>
            </li>
           
            <li className="mb-3">
          
              
              <a href="/about"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> About</a>
            </li>
            <li className="mb-3">
          
               <a href="/service"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Service</a>
            </li>
            <li className="mb-3">
          
               <a href="/career"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Career</a>
            </li>
            <li className="mb-3">
        
               <a href="/contact"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Contact</a>
            </li>
            <li className="mb-3">

            <a href="/contact"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Terms & Condition</a>
            </li>
            <li className="mb-3">

            <a href="/contact"  class="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Privacy Policy</a>
            </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="widget mx-0">
                    <h4 class="widget-title mb-4 footerTitle">Our Newsletter</h4>
                    <p class="mb-4    footerSubTitle" >Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.</p>
                    <form action="#!">
                      <div class="row gy-4">
                        <div class="col-12">
                          <div class="input-group">
                           
                            <input type="email" class="form-control subscribeBack" id="email-newsletter"  placeholder="Email" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-grid">
                            <button class="btn subscribeButton" type="submit">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="row mt-6 border-top border-light-subtle my-5 text-start">
                <div class="footer-copyright-wrapper foot my-4">
                 <img src={copyright} alt="" className="img-fluid" style={{height:"18px"}}/> copyrights <span className="fw-bold companyName">Thamizhan Solutions</span> All Rights Reserved.
                </div>        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
                         
export default Footer