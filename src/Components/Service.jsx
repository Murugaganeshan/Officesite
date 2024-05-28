import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carrers from './Carrers';
import "../Assets/Css/service.css"
import mobilelogo from "../Assets/Images/mobile.png"
import logoWeb from "../Assets/Images/web.png"
import uiuxlogo from "../Assets/Images/uiuxlogo.png"
import ailogo from "../Assets/Images/ai.png"
import cryptologo from "../Assets/Images/cryptologo.png"
import nftlogo from "../Assets/Images/nftlogo.png"

let Service=()=>{

    useEffect(() => {
        AOS.init({ duration: 1000, });
      }, []);

    return(

        <div>
                <section class="py-5 py-xl-8" style={{backgroundColor:" rgb(17, 40, 51)"}}>
                <div class="container">
                    <div class="row justify-content-md-center">
                    <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6" data-aos="fade-in">
                        <h2 class="mb-4 display-5 text-center service serviceTitle"  >Our Services</h2>
                        <p class=" mb-5 text-center serviceSubTitle">Empowering businesses with comprehensive IT solutions. From software development to cybersecurity, we offer tailored services to drive innovation and efficiency. Partner with us for reliable, future-focused technology support.</p>
                        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
                    </div>
                    </div>
                </div>
                <div class="container overflow-hidden">
                    <div class="row gy-5 gx-md-5 justify-content-center">

                <div class="col-10 col-md-5 col-xl-4 overflow-hidden" data-aos="fade-left">
                        <div class="row gy-4">
                        <div class="col-12 col-lg-2">
                        <img src={mobilelogo} alt="" className='img-fluid' style={{height:"40px"}}/>
                        
                        </div>
                        <div class="col-12 col-lg-10">
                            <h4 class="mb-3" style={{color:"white"}}>Mobile App Development</h4>
                            <p class="mb-3 text-secondary">Empowering businesses with cutting-edge mobile solutions. From ideation to deployment, we specialize in crafting intuitive and scalable mobile applications tailored to your unique needs. Let us transform your vision into a seamless user experience.</p>
                            <div>
                            <a href="#" class="fw-bold text-decoration-none link-primary">
                                <Link to="/mobileapp" >Learn More</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                        </div>
          

                    <div class="col-10 col-md-5 col-xl-4 overflow-hidden" data-aos="fade-left">
                        <div class="row gy-4">
                        <div class="col-12 col-lg-2">
                           <img src={logoWeb} alt="" className='img-fluid '  style={{height:"40px"}}/>
                        </div>
                        <div class="col-12 col-lg-10">
                            <h4 class="mb-3" style={{color:"white"}}>Web Devleopment</h4>
                            <p class="mb-3 text-secondary">Transforming digital presence with bespoke web solutions. Our expert team leverages the latest technologies to create responsive and visually captivating websites. From concept to launch, we ensure your online platform reflects your brand's identity and drives tangible results.</p>
                            <div>
                            <a href="#!" class="fw-bold text-decoration-none link-primary">
                            <Link to="/webdevelopment">Learn More</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
             

                    <div class="col-10 col-md-5 col-xl-4 overflow-hidden" data-aos="fade-left">
                        <div class="row gy-4">
                        <div class="col-12 col-lg-2">
                            <img src={uiuxlogo} alt="" className='img-fluid ' style={{height:"40px"}}/>
                        </div>
                        <div class="col-12 col-lg-10">
                            <h4 class="mb-3" style={{color:"white"}}>UI UX Development</h4>
                            <p class="mb-3 text-secondary">Elevate user experiences with our UI/UX design expertise. We blend creativity with user-centric design principles to craft intuitive interfaces that captivate and engage. From wireframes to prototypes, we tailor solutions that enhance usability and drive meaningful interactions.</p>
                            <div>
                            <a href="#!" class="fw-bold text-decoration-none link-primary">
                                <Link to="/uiux">Learn More</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
          

                    <div class="col-10 col-md-5 col-xl-4 overflow-hidden" data-aos="fade-right">
                        <div class="row gy-4">
                        <div class="col-12 col-lg-2">
                            <img src={ailogo} alt="" className='img-fluid ' style={{height:"40px"}}/>
                        </div>
                        <div class="col-12 col-lg-10">
                            <h4 class="mb-3" style={{color:"white"}}>AI Development</h4>
                            <p class="mb-3 text-secondary">Pioneering AI solutions tailored to your business needs. Leveraging advanced algorithms and machine learning techniques, we empower organizations to automate processes, gain insights, and optimize operations. From predictive analytics to natural language processing, we deliver cutting-edge AI technologies for impactful results.</p>
                            <div>
                            <a href="#!" class="fw-bold text-decoration-none link-primary">
                                <Link to="/aidevelopment">Learn More</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
              

                    <div class="col-10 col-md-5 col-xl-4 overflow-hidden" data-aos="fade-right">
                        <div class="row gy-4">
                        <div class="col-12 col-lg-2">
                            <img src={cryptologo} alt="" className='img-fluid ' style={{height:"40px"}}/>
                        </div>
                        <div class="col-12 col-lg-10">
                            <h4 class="mb-3" style={{color:"white"}}>Crypto Trading</h4>
                            <p class="mb-3 text-secondary">Empowering investors with advanced crypto trading solutions. Our platform offers real-time market analysis, secure transactions, and customizable trading strategies. Seamlessly navigate the volatile cryptocurrency landscape with our innovative tools and expert guidance.</p>
                            <div>
                            <a href="#!" class="fw-bold text-decoration-none link-primary">
                                <Link to="/cripto">Learn More</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
            


                    <div class="col-10 col-md-5 col-xl-4 overflow-hidden" data-aos="fade-right">
                        <div class="row gy-4">
                        <div class="col-12 col-lg-2">
                            <img src={nftlogo} alt="" className='img-fluid' style={{height:"40px"}}/>
                        </div>
                        <div class="col-12 col-lg-10">
                            <h4 class="mb-3" style={{color:"white"}}>NFT Marketing</h4>
                            <p class="mb-3 text-secondary">NFT marketing relies on engaging content, community building, and influencer collaboration to promote digital assets effectively. It encompasses storytelling, exclusive events, and educational efforts to attract and retain collectors. Transparency, innovation, and strategic partnerships are key elements in navigating the dynamic NFT market landscape.
                            </p>
                            <div>
                            <a href="#!" class="fw-bold text-decoration-none link-primary">
                                <Link to="/neft">Learn More</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
            
                    </div>
                </div>
                </section>
              
                <Carrers></Carrers>

        </div>
    )
}
export default Service