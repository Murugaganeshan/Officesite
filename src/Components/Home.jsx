import React from 'react';
import video1 from "../Assets/Images/video1.mp4";
import image from "../Assets/Images/objects.png";
import "../Assets/Css/home.css";
import About from "./About";

const Home = () => {
    return (
        <div className="">
            <div id="carouselExampleAutoplaying" className="carousel slide homeBackground container-fluid " data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner mt-5">
                    <div className="carousel-item active ">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h1 className='contents-h1'>Crypto Trading</h1>
                                <p className='homeQuotes'>With a multi-billion dollar market capitalization, crypto is here to stay. It's not going anywhere.</p>
                            </div>
                            <div className="col-md-6">
                                <video src={video1} className="video-fluid video-shadow" loop muted autoPlay playsInline style={{height:"500px"}}></video>
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
