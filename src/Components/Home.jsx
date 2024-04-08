import hero from "./Assest/hero-bg.jpg";
import style from "./home.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


let Home = () => {
    return (
       <div>
         <div className="container-fluid position-relative" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh' }}>
            <div className={`${style.overlay}`}>
            <div className="container text-center position-absolute top-50 start-50 translate-middle">
                <div className="row">
                    <div className={`col ${style.content}`}>
                        <h1>Thamizhan Solution</h1>
                        <h3>We build brands and beautiful experiences</h3>
                    </div>
                    <div className={style.btn}>
                     <button className={`btn btn-primary me-3 ${style.btn1}`}>MORE ABOUT US</button>
                     <button className={`btn btn-secondary ${style.btn2}`}>LET'S TALK</button>
                    </div>
                </div>
            </div>
            </div>
        </div>   
        <div style={{ position: "absolute", bottom: "50px", left: "50px", display: "flex", alignItems: "center" }}>
                <FaFacebook className="me-3"  color="white"/>
                <FaInstagram className="me-3" color="white"/>
                <FaTwitter  color=" white"/>
            </div>
       </div>
    );
}

export default Home;

