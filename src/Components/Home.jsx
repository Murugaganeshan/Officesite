// import React, { useEffect } from 'react';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import "../Assets/Css/home.css"
// import hero from './Assest/lp.jpg';
// import TweenLite from 'gsap'; 
// import Circ from 'gsap';
// import { Link } from 'react-router-dom';
// import About from "./About"   
// import Service from './Service';
// import Carrers from './Carrers';




// const Home = () => {

//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

//     useEffect(() => {
      
//         const initAnimation = () => {
//             let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

//             function initHeader() {
//                 width = window.innerWidth;
//                 height = window.innerHeight;
//                 target = {x: width/2, y: height/2};

//                 largeHeader = document.getElementById('large-header');
//                 largeHeader.style.height = height+'px';

//                 canvas = document.getElementById('demo-canvas');
//                 canvas.width = width;
//                 canvas.height = height;
//                 ctx = canvas.getContext('2d');

//                 // create points
//                 points = [];
//                 for(let x = 0; x < width; x = x + width/20) {
//                     for(let y = 0; y < height; y = y + height/20) {
//                         let px = x + Math.random()*width/20;
//                         let py = y + Math.random()*height/30;
//                         let p = {x: px, originX: px, y: py, originY: py };
//                         points.push(p);
//                     }
//                 }

//                 // for each point find the 5 closest points
//                 for(let i = 0; i < points.length; i++) {
//                     let closest = [];
//                     let p1 = points[i];
//                     for(let j = 0; j < points.length; j++) {
//                         let p2 = points[j]
//                         if(!(p1 == p2)) {
//                             let placed = false;
//                             for(let k = 0; k < 5; k++) {
//                                 if(!placed) {
//                                     if(closest[k] == undefined) {
//                                         closest[k] = p2;
//                                         placed = true;
//                                     }
//                                 }
//                             }

//                             for(let k = 0; k < 5; k++) {
//                                 if(!placed) {
//                                     if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                                         closest[k] = p2;
//                                         placed = true;
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                     p1.closest = closest;
//                 }

//                 // assign a circle to each point
//                 for(let i in points) {
//                     let c = new Circle(points[i], 2+Math.random()*1, 'rgba(255,255,255,0.1)');
//                     points[i].circle = c;
//                 }
//             }

//             function addListeners() {
//                 if(!('ontouchstart' in window)) {
//                     window.addEventListener('mousemove', mouseMove);
//                 }
//                 window.addEventListener('scroll', scrollCheck);
//                 window.addEventListener('resize', resize);
//             }

//             function mouseMove(e) {
//                 let posx = 0, posy = 0;
//                 if (e.pageX || e.pageY) {
//                     posx = e.pageX;
//                     posy = e.pageY;
//                 }
//                 else if (e.clientX || e.clientY)    {
//                     posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//                     posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//                 }
//                 target.x = posx;
//                 target.y = posy;
//             }

//             function scrollCheck() {
//                 if(document.body.scrollTop > height) animateHeader = false;
//                 else animateHeader = true;
//             }

//             function resize() {
//                 width = window.innerWidth;
//                 height = window.innerHeight;
//                 largeHeader.style.height = height+'px';
//                 canvas.width = width;
//                 canvas.height = height;
//             }

//             function initAnimation() {
//                 animate();
//                 for(let i in points) {
//                     shiftPoint(points[i]);
//                 }
//             }

//             function animate() {
//                 if(animateHeader) {
//                     ctx.clearRect(0,0,width,height);
//                     for(let i in points) {
//                         // detect points in range
//                         if(Math.abs(getDistance(target, points[i])) < 4000) {
//                             points[i].active = 0.3;
//                             points[i].circle.active = 0.6;
//                         } else if(Math.abs(getDistance(target, points[i])) < 20000) {
//                             points[i].active = 0.1;
//                             points[i].circle.active = 0.3;
//                         } else if(Math.abs(getDistance(target, points[i])) < 40000) {
//                             points[i].active = 0.02;
//                             points[i].circle.active = 0.1;
//                         } else {
//                             points[i].active = 0;
//                             points[i].circle.active = 0;
//                         }
//                         drawLines(points[i]);
//                         points[i].circle.draw();
//                     }
//                 }
//                 requestAnimationFrame(animate);
//             }

//             function shiftPoint(p) {
//                 TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
//                     y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
//                     onComplete: function() {
//                         shiftPoint(p);
//                     }});
//             }

//             function drawLines(p) {
//                 if(!p.active) return;
//                 for(let i in p.closest) {
//                     ctx.beginPath();
//                     ctx.moveTo(p.x, p.y);
//                     ctx.lineTo(p.closest[i].x, p.closest[i].y);
//                     ctx.strokeStyle = 'rgba(255, 255, 255,' + p.active +')';
//                     ctx.stroke();
//                 }
//             }

//             function Circle(pos,rad,color) {
//                 let _this = this;

//                 (function() {
//                     _this.pos = pos || null;
//                     _this.radius = rad || null;
//                     _this.color = color || null;
//                 })();

//                 this.draw = function() {
//                     if(!_this.active) return;
//                     ctx.beginPath();
//                     ctx.arc(_this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
//                     ctx.fillStyle = 'rgba(255, 255, 255,' + _this.active + ')';
//                     ctx.fill();
//                 };
//             }
            
//             function getDistance(p1, p2) {
//                 return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//             }

//             initHeader();
//             initAnimation();
//             addListeners();
//         };

//         initAnimation();
//     }, []);

//     return (
        
//     <div id="home"> 
//              <div style={{backgroundColor:"black",position:'relative',backgroundImage:`url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
//                  <div id="large-header" className="large-header">
//                      <canvas id="demo-canvas">
//                      </canvas>
//                     <div className='content-home'>
//                     <div style={{marginTop:"10px"}} className="hero border-1 pb-3">
      
//                      <div className="card-img-overlay d-flex align-items-center">
//                     <div className="container d-grid gap-2">
           
//                       <h1  className='text-center contents-h1'  data-aos="fade-right">BlockChain Development</h1>
//                       <h3 data-aos="fade-right" className='content-h3 text-center'>We build brands and beautiful experiences</h3>
//                       <div className='text-center'  data-aos="fade-left">
//                                     <Link to="/about"> <button className='btn btn-primary  me-3  btn1 bt' >MORE ABOUT US </button></Link>
//                                     <Link to="/contactus"><button className='btn btn-secondary me-3 btn2 bt'> CONTACT US</button></Link> 
//                      </div>
//                     </div>
//                     </div>
//                     </div>
//                     </div>
//                  </div>
//               </div>
//             <About/>
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import video1 from "../Assets/Images/video1.mp4";
import image from "../Assets/Images/objects.png";
import "../Assets/Css/home.css";
import About from "./About";

const Home = () => {
    return (
        <div className="">
            <div id="carouselExampleAutoplaying" className="carousel slide homeBackground container-fluid " data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner mt-5">
                    <div className="carousel-item active ">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h1 className='contents-h1'>Crypto Trading</h1>
                                <p className='homeQuotes'>With a multi-billion dollar market capitalization, crypto is here to stay. It's not going anywhere.</p>
                            </div>
                            <div className="col-md-6">
                                <video src={video1} className="video-fluid video-shadow" loop muted autoPlay playsInline></video>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item secondBackground">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h1 className='contents-h1'>Web Development</h1>
                                <p className='homeQuotes'>Website without visitors is like a ship lost in the horizon</p>
                            </div>
                            <div className="col-md-6">
                                <img src={image} className="img-fluid" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h1 className='contents-h1'>UI/UX Design</h1>
                                <p className='homeQuotes'>Design isn't finished until somebody is using it.</p>
                            </div>
                            <div className="col-md-6">
                                <img src={image} className="img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"></li>
                </ol>
            </div>
            <About />
        </div>
    );
}

export default Home;
