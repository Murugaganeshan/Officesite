
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import style from "./footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from "./Assest/logo3.png";

let Footer = () => {
    return (
        <div>
            <footer className={`footer ${style.footer}`}>
                <section>
                    <div className="row">
                        <div className={`col-12 col-lg-4 py-4 py-md-5 py-xxl-8 ${style.footerBlock}`}>
                            <div className="row h-100 align-items-end justify-content-center">
                                <div className="col-12 col-md-11 col-xl-10">
                                    <div className="footer-logo-wrapper">
                                        <a href="#!">
                                            <img src={logo} alt="Company Logo" width="179" height="60"/>
                                        </a>
                                    </div>
                                    <div className="social-media-wrapper mt-5">
                                        <ul className="nav">
                                            <li className="nav-item me-3">
                                                <a className="nav-link p-2" href="#!">
                                                    <FaTwitter color="white"/>
                                                </a>
                                            </li>
                                            <li className="nav-item me-3">
                                                <a className="nav-link p-2 " href="#!">
                                                    <FaInstagram color="white"/>
                                                </a>
                                            </li>
                                            <li className="nav-item me-3">
                                                <a className="nav-link p-2 " href="#!">
                                                    <FaFacebook color="white"/>
                                                </a>
                                            </li>
                                            <li className="nav-item me-3">
                                                <a className="nav-link p-2 " href="#!">
                                                    <FaWhatsapp color="white"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="address-wrapper mt-5">
                                        <address className="mb-2 text-white">Thaizhan solution address</address>
                                        <p className="mb-2">
                                            <a className="link-light text-decoration-none" href="#">Address:</a>
                                        </p>
                                        <p className="mb-0">
                                            <a className="link-light text-decoration-none" href="#">Email:</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 bg-dark py-4 py-md-5 py-xxl-8">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-11 col-xxl-10">
                                    <div className="row gy-4 gy-sm-0">
                                        <div className="col-6 col-sm-3">
                                            <div className={style.widget}>
                                                <h4 className="widget-title mb-4 text-white">Top Services</h4>
                                                <ul className="list-unstyled">
                                                    <li className="mb-3">
                                                        <Link to="/mobileapp" className="link-secondary text-decoration-none" path="/mobileapp">
                                                            <GoArrowRight /> Mobile Development
                                                        </Link>
                                                    </li>
                                                    <li className="mb-3">
                                                        <Link to="/webdevelopment" className="link-secondary text-decoration-none">
                                                            <GoArrowRight /> Web Development
                                                        </Link>
                                                    </li>
                                                    <li className="mb-3">
                                                        <Link to="/uiux" className="link-secondary text-decoration-none">
                                                            <GoArrowRight /> UI/UX Development
                                                        </Link>
                                                    </li>
                                                    <li className="mb-3">
                                                        <Link to="aidevelopment" className="link-secondary text-decoration-none">
                                                            <GoArrowRight /> AI Development
                                                        </Link>
                                                    </li>
                                                    <li className="mb-3">
                                                        <Link to="/cripto" className="link-secondary text-decoration-none">
                                                            <GoArrowRight /> Crypto Trading
                                                        </Link>
                                                    </li>
                                                    <li className="mb-3">
                                                        <Link to="/neft" className="link-secondary text-decoration-none">
                                                            <GoArrowRight /> NFT Marketing
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-3">
                                            <div className={style.widget}>
                                                <h4 className="widget-title mb-4 text-white">Company</h4>
                                                <ul className="list-unstyled">
                                                    <li className="mb-3">
                                                        <Link to="/" className="link-secondary text-decoration-none" >
                                                            <GoArrowRight /> Home
                                                        </Link>
                                                    </li>
                                                    <li className="mb-3">
                                                        <Link to="/about" className="link-secondary text-decoration-none">
                                                            <GoArrowRight /> About
                                                        </Link>
                                                    </li>
                                                    <li className="mb-3">
                                                        <Link to="/service" className="link-secondary text-decoration-none">
                                                            <GoArrowRight /> Services
                                                        </Link>
                                                    </li>
                                                    <li className="mb-3">
                                                        <Link to="/careers" className="link-secondary text-decoration-none">
                                                            <GoArrowRight /> Careers
                                                        </Link>
                                                    </li>
                                                    <li className="mb-3">
                                                        <Link to="/contactus" className="link-secondary text-decoration-none">
                                                            <GoArrowRight /> Contact Us
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="widget">
                                                <h4 className="widget-title mb-4 text-white">Our Newsletter</h4>
                                                <p className="mb-4 text-white  fw-lighter">Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.</p>
                                                <form action="#!">
                                                    <div className="row gy-4">
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                {/* <span className="input-group-text" id="email-newsletter-addon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                                    </svg>
                                                                </span> */}
                                                                <input type="email" className="form-control" id="email-newsletter"  placeholder="Email" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required/>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="d-grid">
                                                                <button className="btn btn-primary" type="submit">Subscribe</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-6 border-top border-light-subtle">
                                        <div className="footer-copyright-wrapper text-secondary mt-6">
                                            &copy; Copyrights <span class="fw-bold text-white">Thamizhan Solutions</span> All Rights Reserved.
                                        </div>
                                        {/* <div className="credits text-secondary mt-2 fs-7">
                                            Built by <a href="https://bootstrapbrain.com/" className="link-secondary text-decoration-none">BootstrapBrain</a> with <span className="text-primary">&#9829;</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer;


