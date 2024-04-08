import { BiMenu } from 'react-icons/bi';
import style from "./nav.module.css";
import logo from "../Components/Assest/logo3.png";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';




let Nav = () => {
    return (
        <div>
            <div className="container-fluid " style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                <div className={`${style.navBar} row align-items-center `}>
                    <div className="col-auto">
                        <img src={logo} alt="" className={`${style.logo}  float-start`} />
                    </div>
                </div>
                <button className={`btn btn-primary  position-fixed top-0 end-0 m-5 mt-4 ${style.stickyToggle} ${style.roundedButton}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <BiMenu />
            </button>
            </div>

           

            <div className="position-relative">
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className={`${style.sideBar} offcanvas-header`}>
                        <h5 className="offcanvas-title sideBar" id="offcanvasRightLabel">Thamizhan Solution</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ backgroundColor: "white" }}></button>
                    </div>
                    <div className={`${style.sideBarBody} offcanvas-body`}>
                        <ol className="list-unstyled">
                            <li><Link to="home" className={style.navLink}>Home</Link></li>
                            <li><Link to="about" className={style.navLink}>About</Link></li>
                            <li><Link to="service" className={style.navLink}>Service</Link></li>
                            <li><Link to="carrers" className={style.navLink}>Carrers</Link></li>
                            <li><Link to="contactus" className={style.navLink}>Contactus</Link></li>
                        </ol>
                        <div className="container ">
                            <div className="row justify-content-between ">
                            <div className="col"><a href="/" style={{ color: "white" }}><FaFacebook/> </a></div>
                            <div className="col"><a href="/" style={{ color: "white" }}><FaInstagram/> </a></div>
                            <div className="col"><a href="/" style={{ color: "white" }}><FaTwitter/> </a></div>
                            <div className="col"><a href="/" style={{ color: "white" }}><FaLinkedin/> </a></div>
                             </div>
                        </div>
                    </div>
                   
                   
                </div>
            </div>
            
        </div>
       
    );
}

export default Nav;