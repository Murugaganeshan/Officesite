import { BiMenu } from 'react-icons/bi';
import style from "./nav.module.css";
import logo from "../Components/Assest/logo.jpg";
import hero from "./Assest/hero-bg.jpg";
import { Link } from 'react-router-dom';



let Nav = () => {
    return (
        <div>
            <div className="container-auto" style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                <div className={`${style.navBar} row align-items-center`}>
                    <div className="col-auto">
                        <img src={logo} alt="" className={`${style.logo} rounded float-start`} />
                    </div>
                    <div className="col">
                        <h2 className={`${style.name} text-start pt-3`}>Thamizhan solution</h2>
                    </div>
                </div>
            </div>

            <button className={`btn btn-primary position-fixed top-0 end-0 m-3 ${style.stickyToggle}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <BiMenu />
            </button>

          

            <div className="position-relative">
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className={`${style.sideBar} offcanvas-header`}>
                        <h5 className="offcanvas-title sideBar" id="offcanvasRightLabel">Thamizhan Solution</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ backgroundColor: "white" }}></button>
                    </div>
                    <div className={`${style.sideBarBody} offcanvas-body`}>
                        <ol className="list-unstyled">
                            <li><Link to="home">Home</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="service">Service</Link></li>
                            <li><Link to="carrers">Carrers</Link></li>
                            <li><Link to="contactus">Contactus</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
            
        </div>
       
    );
}

export default Nav;
