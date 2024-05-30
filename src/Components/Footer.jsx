import { Link } from "react-router-dom"
import { GoArrowRight } from "react-icons/go";
import logo from "../Assets/Images/finalLogo.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import "../Assets/Css/Footer.css" 

let Footer=()=>{

    return(

    <div className='container-fluid footer'>
      <div className="row" >
        <div class='col-12 col-lg-4  py-4 py-md-5 py-xxl-8  footerBlock'>
          <div class="row h-70 align-items-end justify-content-center">
            <div class="col-12 col-md-11 col-xl-10 footer-con">
              <div class="footer-logo-wrapper m-3">
               
                  <img src={logo} alt="Company Logo" width="179" height="60"/>
                
              </div>
              <div className="col footer-col">
                <h1> Follow Us </h1>
                    <div className="social-links my-4">
                       <a href="/"><FaFacebook/> </a>
                       <a href="/"><FaInstagram/> </a>
                       <a href="/"><FaTwitter/> </a>
                       <a href="https://www.linkedin.com/company/101978309/admin/inbox/thread/2-NmRmNTc4NWUtZGRiZS00Y2IwLTgwNDktNWExNmNiMTNkODc0XzAxMA==/"><FaLinkedin/> </a>
                    </div>
                </div>

            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 bg-dark py-4 py-md-5 py-xxl-8 ">
          <div class="row justify-content-center">
            <div class="col-12 col-md-11 col-xxl-10">
              <div class="row row-cols-md-3 row-cols-sm-1 row-cols-1 gy-4 gy-sm-0">
                <div class="col-sm-3">
                  <div>
                    <h4 class="widget-title mb-4 text-white mx-4">Services</h4>
                    <ul class="list-unstyled service mx-4     ">
                      <li class="mb-3">
                      <Link to="/mobileapp" class="link-secondary text-decoration-none" path="/mobileapp"><GoArrowRight /> Mobile Development</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/webdevelopment" class="link-secondary text-decoration-none" ><GoArrowRight /> Web Development</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/uiux" class="link-secondary text-decoration-none"><GoArrowRight /> UI/UX Development</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/aidevelopment" class="link-secondary text-decoration-none"><GoArrowRight /> AI Development</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/cripto" class="link-secondary text-decoration-none"><GoArrowRight /> Crypto Trading</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/neft" class="link-secondary text-decoration-none"><GoArrowRight /> NFT Marketing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-6 col-sm-3">
                  <div>
                    <h4 class="widget-title mb-4 text-white mx-4">Company</h4>
                    <ul class="list-unstyled company mx-4">
                      <li class="mb-3 ">
                        <Link to="/" className="link-secondary text-decoration-none"><GoArrowRight /> Home</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/about" className="link-secondary text-decoration-none"><GoArrowRight /> About</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/service" className="link-secondary text-decoration-none"><GoArrowRight /> Services</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/careers" className="link-secondary text-decoration-none"><GoArrowRight /> Careers</Link>
                      </li>
                      <li class="mb-3">
                      <Link to="/contactus" className="link-secondary text-decoration-none"><GoArrowRight /> Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-sm-6 ">
                  <div class="widget mx-4">
                    <h4 class="widget-title mb-4 text-white">Our Newsletter</h4>
                    <p class="mb-4   fw-lighter" style={{color:"grey"}}>Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.</p>
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
              
              <div class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 mt-6 border-top border-light-subtle my-5 text-center">
                <div className="col"> 
                <div className="privacy">
            <a class="nav-link " aria-current="page" href="#">Privacy & Policy</a>
            <div class="vert"></div>
                           
            <a class="nav-link " aria-current="page" href="#">Terms & Condition   </a>
         

            </div></div>
          
                <div class="footer-copyright-wrapper link-secondary my-4 col">
                  &copy; copyrights <span className="fw-bold text-white">Thamizhan Solutions</span> All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
                         
export default Footer



