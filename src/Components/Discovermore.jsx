import "../Assets/Css/Discover.css"
import image from "../Assets/Images/discoverImage.png"
import verstile from "../Assets/Images/versatile.png"
import digital from "../Assets/Images/digital.png"
let Discovermore=()=>{
    
    return(
        <div className="discoverBack">
            <div className="container ">
                <div className="row ">
                    <div className="col mt-5">
                        <img src={image} alt="" className="img-fluid discoverImage" style={{height:"330px"}}/>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="card discoverCard">
                            <div className="card-body discoverCardBack">
                                <h5 className="card-title discoverTitle mb-4">Who are we ?</h5>
                                <p className="card-text discoverSubTitle">We help people incredible brands and superior products. Our perspective is to furnish outstanding captivating services. </p>
                                <p className="card-text discoverSubTitle">We are fast growing company, but we have never lost sight of our core values. We belive in collaboration, Innovation and customer satisfaction. We are always for new ways to improve  our products and services.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5">
                    <div className="card discoverCard">
                            <div className="card-body discoverCardBack">
                                <h5 className="card-title discoverTitle mb-4">Our Goals</h5>
                                <p className="card-text discoverSubTitle">We help people incredible brands and superior products. Our perspective is to furnish outstanding captivating services. </p>
                                <p className="card-text discoverSubTitle">We are fast growing company, but we have never lost sight of our core values. We belive in collaboration, Innovation and customer satisfaction. We are always for new ways to improve  our products and services.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mt-5 ">
                    <div className="col mb-5">
                    <div className="card discoverCard">
                            <div className="card-body discoverCardBack">
                                <img src={verstile} alt="" className="image-fluid mb-3" style={{height:"32px"}}/>
                                <h5 className="card-title discoverTitle mb-4">Versatile Brand</h5>
                                <p className="card-text discoverSubTitle">We are crafting a digital method that sublists life across all mediums.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col ">
                    <div className="card discoverCard">
                            <div className="card-body discoverCardBack">
                            <img src={digital} alt="" className="image-fluid mb-3" style={{height:"32px"}}/>
                                <h5 className="card-title discoverTitle mb-4">Digital Agency</h5>
                                <p className="card-text discoverSubTitle">We belive in innovation by merging primary with <br /> elaborate ideas. </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Discovermore