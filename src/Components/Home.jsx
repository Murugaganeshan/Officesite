import About from "./About";
import hero from "./Assest/hero-bg.jpg";
import style from "./home.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";



let Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, });
      }, []);

    return (
       <div>

         <div className="container-fluid position-relative" style={{ backgroundImage: `url(${hero})`,width:"100%", backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh' }}>

       
            <div className={`${style.overlay}`}>
            <div className="container text-center position-absolute top-50 start-50 translate-middle">
                <div className="row">
                    <div className={`col ${style.content}`}>
                        <h1  data-aos="fade-right">Thamizhan Solution</h1>
                        <h3 data-aos="fade-right">We build brands and beautiful experiences</h3>
                    </div>
                    <div className={style.btn}  data-aos="fade-left">
                     <button className={`btn btn-primary me-3  ${style.btn1}`}>MORE ABOUT US</button>
                     <button className={`btn btn-secondary me-3 ${style.btn2}`}>LET'S TALK</button>
                    </div>
                </div>
            </div>
            </div>
        </div>   
        <div style={{ position: "absolute", bottom: "50px", left: "50px", display: "flex", alignItems: "center" }}  >
                <FaFacebook className="me-3"  color="white"/>
                <FaInstagram className="me-3" color="white"/>
                <FaTwitter  color=" white"/>
            </div>
          <About></About>
       </div>
    );
}

export default Home;

