import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";
import "../Assets/Css/navbar.css"
import logo from "../Components/Assest/logo3.png";

function NavBar() {




        
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
   
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
        <div className="nav-container"  >
         
          <div className="nav-logo">
                        <img src={logo} alt="Logo Image" className="logo " />

          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/service"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/careers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Carrers 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contactus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                  <IoMdClose />{" "}
              </span>
            ) : (
              <span className="icon">
            
              <CgMenuLeftAlt/>
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
