import { Link } from "react-router-dom"
import { GoArrowRight } from "react-icons/go";
import style from"./footer.module.css"
import { SlArrowRight } from "react-icons/sl";
import logo from "./Assest/logo3.png"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

let Footer=()=>{

    return(
      
    <div className={`container-fluid ${style.fullWidthContainer}`}>
      <div className={`row ${style.fullWidthRow}`}>
        <div class={`col-12 col-lg-4  py-4 py-md-5 py-xxl-8 ${style.footerBlock}`}>
          <div class="row h-70 align-items-end justify-content-center">
            <div class="col-12 col-md-11 col-xl-10">
              <div class="footer-logo-wrapper m-3">
                <a href="#!">
                  <img src={logo} alt="Company Logo" width="179" height="60"/>
                </a>
              </div>
              <div class="social-media-wrapper mt-5 m-3">
                <ul class="nav">
                  <li class="nav-item me-3">
                    <a class="nav-link  p-2 " href="#!">
                    <FaFacebook   color="white"/>
                    </a>
                  </li>
                  <li class="nav-item me-3">
                    <a class="nav-link  p-2 " href="#!">
                    <FaInstagram  color="white"/>
                    </a>
                  </li>
                           
        
         
                  <li class="nav-item me-3">
                    <a class="nav-link  p-2 " href="#!">
                    <FaTwitter  color=" white"/>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  p-2 " href="#!">
                    <FaWhatsapp color="white"/>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="address-wrapper mt-5">
                <address class="mb-2 m-3 text-white fw-bold">Address  :   <span class="fw-light">Madurai</span> </address>
                <p class="mb-2">
                  <a class="link-light text-decoration-none fw-bold" href="#">Phone :   <span class="fw-lighter">+91 9876543210</span> </a>
                </p>
                <p class="mb-0">
                  <a class="link-light text-decoration-none fw-bold" href="#">Email    :   <span class="fw-lighter">abc@gmail.com</span> </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 bg-dark py-4 py-md-5 py-xxl-8 ">
          <div class="row justify-content-center">
            <div class="col-12 col-md-11 col-xxl-10">
              <div class="row row-cols-md-3 row-cols-sm-1 row-cols-1 gy-4 gy-sm-0">
                <div class="col-6 col-sm-3">
                  <div class={` mx-5 ${style.widget}`}>
                    <h4 class="widget-title mb-4 text-white ">Services</h4>
                    <ul class="list-unstyled">
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
                      <Link to="aidevelopment" class="link-secondary text-decoration-none"><GoArrowRight /> AI Development</Link>
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
                  <div class={`mx-2${style.widget}`}>
                    <h4 class="widget-title mb-4 text-white">Company</h4>
                    <ul class="list-unstyled">
                      <li class="mb-3">
                        <Link className="link-secondary text-decoration-none"><GoArrowRight /> Home</Link>
                      </li>
                      <li class="mb-3">
                      <Link className="link-secondary text-decoration-none"><GoArrowRight /> About</Link>
                      </li>
                      <li class="mb-3">
                      <Link className="link-secondary text-decoration-none"><GoArrowRight /> Services</Link>
                      </li>
                      <li class="mb-3">
                      <Link className="link-secondary text-decoration-none"><GoArrowRight /> Careers</Link>
                      </li>
                      <li class="mb-3">
                      <Link className="link-secondary text-decoration-none"><GoArrowRight /> Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-sm-6 ">
                  <div class="widget mx-2">
                    <h4 class="widget-title mb-4 text-white">Our Newsletter</h4>
                    <p class="mb-4 text-white  fw-lighter">Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.</p>
                    <form action="#!">
                      <div class="row gy-4">
                        <div class="col-12">
                          <div class="input-group">
                            {/* <span class="input-group-text" id="email-newsletter-addon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>
                            </span> */}
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
              
              <div class="row mt-6 border-top border-light-subtle my-5">
                <div class="footer-copyright-wrapper link-secondary  ">
                  &copy; copyrights <span className="fw-bold text-white">Thamizhan Solutions</span> All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Footer
