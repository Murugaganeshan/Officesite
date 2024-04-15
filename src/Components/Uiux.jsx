// import img from "./Assest/uiux.jpg"
import { Link } from "react-router-dom"
import style from "./mobileapp.module.css"
import video from "./Assest/uiuxVideo.mp4"

let Uiux=()=>{

    return(

        <div className={style.back}>
          
              <section class="py-3 py-md-5">
                <div class="container mb-4 mb-md-5">
                  <div class="row justify-content-md-center">
                    <div class="col-12 col-md-10 col-xxl-8">
                      {/* <img class="img-fluid rounded shadow" loading="lazy" src={img} alt="UIUX"/> */}
                      <div className={`embed-responsive embed-responsive-16by9 ${style.videoContainer}`}>
                        <video className="embed-responsive-item" src={video} autoPlay loop muted></video>
                    </div>
                    </div>
                  </div>
                </div>

                <div class="container overflow-hidden">
                  <div class="row gy-2 gy-md-0 justify-content-xxl-center">
                    <div class="col-12 order-md-1 col-md-8 col-xxl-6">
                      <div class="text-center text-md-start">
                        <h2 class="display-3 fw-bold lh-1">UI/UX Development</h2>
                        <p class="text-secondary fs-4 mb-2">Description</p>
                        <hr class="w-25 mx-auto ms-md-0 mb-4 text-secondary"/>
                            <p>UI/UX development focuses on creating user interfaces and experiences that are intuitive, efficient, and enjoyable for users. UI (User Interface) design involves designing the visual elements of an application or website, including layout, typography, color schemes, and interactive elements, to create a visually appealing and cohesive design. UX (User Experience) design focuses on understanding users' needs, behaviors, and preferences to create interfaces that are user-friendly, accessible, and provide a seamless experience.

                              UI/UX designers utilize various tools and techniques such as wireframing, prototyping, and user testing to iterate and refine designs based on user feedback. They aim to create interfaces that are easy to navigate, with clear hierarchies and logical flow, to ensure users can accomplish tasks efficiently.

                              Responsive design is crucial in UI/UX development to ensure that interfaces adapt seamlessly to different screen sizes and devices, providing a consistent experience across platforms. Accessibility standards are also prioritized to ensure that interfaces are usable by people with disabilities.

                              UI/UX development involves collaboration between designers, developers, and stakeholders to align design decisions with business goals and user needs. Continuous evaluation and iteration are essential to refine and improve the user experience over time, based on user feedback and analytics data. Ultimately, effective UI/UX development is key to creating products that users love and return to.
                              </p>
                      </div>
                    </div>
                    <div class="col-12 order-md-0 col-md-4 col-xxl-4">
                      <div class="text-center text-md-start me-md-3 me-xl-5">
                        <p class="mb-4">
                          
                          <span class="fs-4 text-secondary">For more details</span>
                        </p>
                        <div class="d-grid">
                        <Link to="/contactus"> <button class={`btn btn-primary btn-lg ${style.btn}`} type="button"> CONTACT US </button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        </div>
    )
}
export default Uiux