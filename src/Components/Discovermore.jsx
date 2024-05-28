import img from "./Assest/dis.jpg"
import style from "../Assets/Css/discovermore.module.css"
import Footer from "./Footer"
import digital from "../Assets/Images/digitalagency.png"
import brand from "../Assets/Images/versatilebrand.png"

let Discovermore=()=>{
    
    return(
        <div>
            <section class={`py-3 py-md-5 ${style.back}`}>
                <div class="container">
                    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                    <div class="col-12 col-lg-6 col-xl-5">
                        <img class="img-fluid rounded" loading="lazy" src={img} alt="Image"/>
                    </div>
{/* *****************************************************************UPPER-START************************************************************************ */}
                    <div class="col-12 col-lg-6 col-xl-7">
                        <div class="row justify-content-xl-center">
                        <div class="col-12 col-xl-11">
                            <h2 class="mb-3">Who Are We?</h2>
                            <p class="lead fs-4 text-secondary mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                            <p class="mb-5">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
                        </div>
                        </div>
                    </div>
{/* *****************************************************************UPPER-END************************************************************************ */}

{/* *****************************************************************DOWN-START*********************************************************************** */}
                    <div class="col-12 col-lg-6 col-xl-7">
                        <div class="row justify-content-xl-center">
                        <div class="col-12 col-xl-11">
                            <h2 class="mb-3 mt-4">Who Are We?</h2>
                            <p class="lead fs-4 text-secondary mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                            <p class="mb-5">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
                        <div class="row gy-4 gy-md-0 gx-xxl-5X">
                            <div class="col-12 col-md-6">
                                <div class="d-flex">
                                <div class="me-4 text-primary">
                                <img src={brand} alt="" className="img-fluid" style={{height:"40px",width:"70px"}}/>

                                </div>
                                <div>
                                    <h2 class="h4 mb-3">Versatile Brand</h2>
                                    <p class="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="d-flex">
                                <div class="me-4 text-primary">
                                   <img src={digital} alt="" className="img-fluid" style={{height:"40px",width:"70px"}}/>
                                </div>
                                <div>
                                    <h2 class="h4 mb-3">Digital Agency</h2>
                                    <p class="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                                </div>
                                </div>
                            </div>
                         </div>
                        </div>
                        </div>
                    </div>
{/* ************************************************************************DOWN-END************************************************************************/}
                    </div>
                </div>
                </section>
                <Footer></Footer>
        </div>
    )
}
export default Discovermore