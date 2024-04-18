// import { Link } from "react-router-dom"
// import { GoArrowRight } from "react-icons/go";
// import logo from "../Assets/Images/finalLogo.jpg"
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
// import "../Assets/Css/Footer.css"

// let Footer=()=>{

//     return(

//       <>
//     <div className='container-fluid footer'>
//       <div className="row" >
//         <div class='col-12 col-lg-4  py-4 py-md-5 py-xxl-8 footerBlock'>
//           <div class="row h-70 align-items-end justify-content-center">
//             <div class="col-12 col-md-11 col-xl-10 footer-con">
//               <div class="footer-logo-wrapper m-3">
//                 <a href="#!">
//                   <img src={logo} alt="Company Logo" width="179" height="60"/>
//                 </a>
//               </div>
//               <div className="col footer-col mx-4">
//                 <h1> Follow Us </h1>
//                     <div className="social-links my-4">
//                        <a href="/"><FaFacebook/> </a>
//                        <a href="/"><FaInstagram/> </a>
//                        <a href="/"><FaTwitter/> </a>
//                        <a href="https://www.linkedin.com/company/101978309/admin/inbox/thread/2-YjU4MDVhNDUtMTEyMC00NzUxLWE0YjAtZWEyY2IwYjlhN2U2XzAxMA==/"><FaLinkedin/> </a>
//                     </div>
//                 </div>
             
//               <div class="mx-4 my-4">
//                 <address class="mb-2 m-1 text-white fw-bold">Address  :   <span class="fw-light" style={{color:'grey'}}>21, Pandian St, T V S Nagar, Madurai, <br/> Tamil Nadu 625003</span> </address>
//                 <p class="mb-2">
//                   <a class="link-light text-decoration-none fw-bold" href="#">Phone :   <span class="fw-light">+91 9876543210</span> </a>
//                 </p>
//                 <p class="mb-0">
//                   <a class="link-light text-decoration-none fw-bold" href="#">Email    :   <span class="fw-light">abc@gmail.com</span> </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col footer-col">
//                 <h1> Quick Links </h1>
//                     <ul>
                   
//                     <li> 
//                     <a href="#"> 
//                     <div className="Icons">
//                         <div> 
//                         </div>
//                         <p style={{textAlign:'start'}}> Home
                       
//                             </p>
//                     </div>
//                     </a>
//                     </li>
//                     <li> 
//                     <a href="#"> 
//                     <div className="Icons">
//                         <div> 
//                         </div>
//                         <p style={{textAlign:'start'}}> About Us
                       
//                             </p>
//                     </div>
//                     </a>
//                     </li>
//                     <li> 
//                     <a href="#"> 
//                     <div className="Icons">
//                         <div> 
//                         </div>
//                         <p style={{textAlign:'start'}}> Our Services
                       
//                             </p>
//                     </div>
//                     </a>
//                     </li>
//                     <li> 
//                     <a href="#"> 
//                     <div className="Icons">
//                         <div> 
//                         </div>
//                         <p style={{textAlign:'start'}}> Meet The Team
                       
//                             </p>
//                     </div>
//                     </a>
//                     </li>
//                     <li> 
//                     <a href="#"> 
//                     <div className="Icons">
//                         <div> 
//                         </div>
//                         <p style={{textAlign:'start'}}> Latest Blog
                       
//                             </p>
//                     </div>
//                     </a>
//                     </li>
//                     <li> 
//                     <a href="#"> 
//                     <div className="Icons">
//                         <div> 
//                         </div>
//                         <p style={{textAlign:'start'}}> Contact Us
                       
//                             </p>
//                     </div>
//                     </a>
//                     </li>
                       

                        
//                     </ul>
//                 </div>
   
               
//                 <div class="col ">
//                   <div class="widget mx-5">
//                     <h4 class="widget-title mb-4 text-white">Our Newsletter</h4>
//                     <p class="mb-4   fw-lighter" style={{color:"grey"}}>Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.</p>
//                     <form action="#!">
//                       <div class="row gy-4">
//                         <div class="col-12">
//                           <div class="input-group">
                           
//                             <input type="email" class="form-control" id="email-newsletter"  placeholder="email" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required />
//                           </div>
//                         </div>
//                         <div class="col-12">
//                           <div class="d-grid">
//                             <button class="btn btn-primary" type="submit">Subscribe</button>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
              
//               <div class="row mt-6 border-top border-light-subtle my-5 mx-5">
//                 <div class="footer-copyright-wrapper link-secondary my-4">
//                   &copy; copyrights <span className="fw-bold text-white">Thamizhan Solutions</span> All Rights Reserved.
//                 </div>
//               </div>
//             </div>
         
//  ]




//     </>
//     )}
                          
// export default Footer




import { Link } from "react-router-dom"
import { GoArrowRight } from "react-icons/go";
import logo from "../Assets/Images/finalLogo.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import "../Assets/Css/Footer.css"

let Footer=()=>{

    return(

      <>
    <div className='container-fluid footer'>
      <div className="row" >
        <div class='col-12 col-lg-4  py-4 py-md-5 py-xxl-8 footerBlock'>
          <div class="row h-70 align-items-end justify-content-center">
            <div class="col-12 col-md-11 col-xl-10 footer-con">
              <div class="footer-logo-wrapper m-3">
                <a href="#!">
                  <img src={logo} alt="Company Logo" width="179" height="60"/>
                </a>
              </div>
              <div className="col footer-col">
                <h1> Follow Us </h1>
                    <div className="social-links my-4">
                       <a href="/"><FaFacebook/> </a>
                       <a href="/"><FaInstagram/> </a>
                       <a href="/"><FaTwitter/> </a>
                       <a href="https://www.linkedin.com/company/101978309/admin/inbox/thread/2-YjU4MDVhNDUtMTEyMC00NzUxLWE0YjAtZWEyY2IwYjlhN2U2XzAxMA==/"><FaLinkedin/> </a>
                    </div>
                </div>
             
              <div class="address-wrapper mt-5">
                <address class="mb-2 m-1 text-white fw-bold">Address  :   <span class="fw-light" style={{color:'grey'}}>21, Pandian St, T V S Nagar, Madurai, <br/> Tamil Nadu 625003</span> </address>
                <p class="mb-2">
                  <a class="link-light text-decoration-none fw-bold" href="#">Phone :   <span class="fw-light">+91 9876543210</span> </a>
                </p>
                <p class="mb-0">
                  <a class="link-light text-decoration-none fw-bold" href="#">Email    :   <span class="fw-light">abc@gmail.com</span> </a>
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
                  <div class=' mx-5'>
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
                  <div class='mx-2'>
                    <h4 class="widget-title mb-4 text-white">Company</h4>
                    <ul class="list-unstyled ">
                      <li class="mb-3">
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
              
              <div class="row mt-6 border-top border-light-subtle my-5 mx-5">
                <div class="footer-copyright-wrapper link-secondary my-4">
                  &copy; copyrights <span className="fw-bold text-white">Thamizhan Solutions</span> All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )}
                          
export default Footer