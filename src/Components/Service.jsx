import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carrers from './Carrers';
import "../Assets/Css/service.css"
import mobilelogo from "../Assets/Images/mobile.png"
import logoWeb from "../Assets/Images/web.png"
import uiuxlogo from "../Assets/Images/uiux.png"
import ailogo from "../Assets/Images/ai.png"
import cryptologo from "../Assets/Images/crypto.png"
import nftlogo from "../Assets/Images/nft.png"
import learnmore from "../Assets/Images/learnnn.png"

let Service=()=>{

    useEffect(() => {
        AOS.init({ duration: 1000, });
      }, []);

    return(

        <div>
                <section class="py-5 py-xl-8  serviceBack" style={{backgroundColor:" #000000"}}>
                <div className="container">
                <h2 class="mb-4 display-5 text-center  serviceTitle"  >Our Services</h2>
                        <p class=" mb-5 text-center serviceSubTitle">Empowering businesses with comprehensive IT solutions. From software development to cybersecurity, we offer tailored services to drive innovation and efficiency. Partner with us for reliable, future-focused technology support.</p>
                        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
                </div>      
                        <div class="container mt-5">
                        <div class="row" data-aos="fade-right">
                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={mobilelogo} alt="" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div class="card-body">
                                <h4 class=" serviceCardTitle">Mobile App Development</h4>
                                <p class="mb-3 serviceCardSubTitle">Empowering businesses with cutting-edge mobile solutions. From ideation to deployment, we specialize in crafting intuitive and scalable mobile applications tailored to your unique needs. Let us transform your vision into a seamless user experience.</p>
                                <a href='/mobileapp' style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                        <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                                 </a>
                                </div>
                            </div>
                            </div>

                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={logoWeb} alt="" className='img-fluid mx-3 mt-3'  style={{height:"45px",width:"45px"}}/>
                                <div class="card-body">
                                <h4 class="serviceCardTitle">Web Devleopment</h4>
                                <p class=" mb-3 serviceCardSubTitle ">Transforming digital presence with bespoke web solutions. Our expert team leverages the latest technologies to create responsive and visually captivating websites. From concept to launch, we ensure your online platform reflects your brand's identity and drives tangible results.</p>
                                <a href='/webdevelopment'style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                                </a>             
                             </div>
                            </div>
                            </div>

                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={uiuxlogo} alt="" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                            <div class="card-body">
                            <h4 class="serviceCardTitle">UI UX Development</h4>
                            <p class="mb-3 serviceCardSubTitle ">Elevate user experiences with our UI/UX design expertise. We blend creativity with user-centric design principles to craft intuitive interfaces that captivate and engage. From wireframes to prototypes, we tailor solutions that enhance usability and drive meaningful interactions.</p>                                                      
                            <a href='/uiux' style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                 <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                            </a>
                             </div>
                            </div>
                            </div>
                        </div>

                        <div class="row mt-0" data-aos="fade-right">
                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={ailogo} alt="" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div class="card-body">
                                <h4 class="serviceCardTitle">AI Development</h4>
                                <p class="mb-3 serviceCardSubTitle">Pioneering AI solutions tailored to your business needs. Leveraging advanced algorithms and machine learning techniques, we empower organizations to automate processes, gain insights, and optimize operations. From predictive analytics to natural language processing, we deliver cutting-edge AI technologies for impactful results.</p>
                               <a href='/aidevelopment'  style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                               </a>          
                                </div>
                            </div>
                            </div>

                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={cryptologo} alt="" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>

                                <div class="card-body">
                                <h4 class="mb-3 serviceCardTitle">Crypto Trading</h4>
                                <p class="mb-3 serviceCardSubTitle">Empowering investors with advanced crypto trading solutions. Our platform offers real-time market analysis, secure transactions, and customizable trading strategies. Seamlessly navigate the volatile cryptocurrency landscape with our innovative tools and expert guidance.</p>
                                <a href='/cripto'  style={{ position: 'absolute', bottom: '10px', right: '10px' }}> 
                                <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                                </a>  
                                </div>
                            </div>
                            </div>

                            
                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={nftlogo} alt="" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div class="card-body">
                                <h4 class="mb-3 serviceCardTitle" >NFT Marketing</h4>
                                <p class="mb-3 serviceCardSubTitle">NFT marketing relies on engaging content, community building, and influencer collaboration to promote digital assets effectively. It encompasses storytelling, exclusive events, and educational efforts to attract and retain collectors. Transparency, innovation, and strategic partnerships are key elements in navigating the dynamic NFT market landscape. </p>
                                <a href='/neft' style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                                </a>          
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                   
                </section>
              

        </div>
    )
}
export default Service

