import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "../Assets/Css/navbar.css"
import logo from "../Assets/Images/finalLogo.jpg";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-scroll";

function NavBar() {
  const closeMenu=()=> setClick(false)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
        
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
   
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }
  };
  window.addEventListener("scroll", changeNavbarColor);


  return (
    <>
      <nav  
       className={
        colorChange
            ? "navbar colorChange sticky-top "
            : "navbar sticky-top"
    }
      //  className="navbar sticky-top"
       >
        <div className="nav-container">
         
          <div className="nav-logo">
          <img src={logo} alt="Logo Image" className="logo"/>

          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              {/* <Link
            
              exact
                to="homepage"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
               Home
              </Link> */}
              <a href="/" className="nav-links">Home </a>
            </li>
           
            <li className="nav-item">
            {/* <Link
                exact
                to="aboutpage"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
               About
              </Link> */}
               <a href="/about" className="nav-links">About </a>
            </li>
            <li className="nav-item">
            {/* <Link
                exact
                to="serviceTitle"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
               Service
              </Link> */}
                    <a href="/service" className="nav-links">Services</a>
            </li>
            <li className="nav-item">
            {/* <Link
                exact
                to="rounded"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
               
               Careers
              </Link> */}
                    <a href="/career" className="nav-links">Careers</a>
            </li>
            <li className="nav-item">
            {/* <Link
                exact
                to="contactus-text"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
              Contact
              </Link> */}
                    <a href="/contact" className="nav-links">Contact</a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                  <IoMdClose />{" "}
              </span>
            ) : (
              <span className="icon">
            
            <CgMenuRightAlt />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;


