import { Link } from "react-router-dom"
import style from "./mobileapp.module.css"
import video from "./Assest/mobAppVideo.webm"


let MobileApp=()=>{
    return(
        <div  className={style.back}>
            <section class="py-3 py-md-5">
              <div class="container mb-4 mb-md-5">
                <div class="row justify-content-md-center">
                  <div class="col-12 col-md-10 col-xxl-8">
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
                      <h2 class="display-3 fw-bold lh-1">MobilApp Development</h2>
                      <p class="text-secondary fs-4 mb-2">Description</p>
                      <hr class="w-25 mx-auto ms-md-0 mb-4 text-secondary"/>
                      <p>Mobile app development involves the creation of software applications specifically designed to run on mobile devices like smartphones and tablets. It typically follows a process involving ideation, design, development, testing, and deployment. Developers use programming languages like Java, Kotlin, Swift, or React Native to build apps for Android and iOS platforms. User experience (UX) and user interface (UI) design play crucial roles in ensuring the app's success. Security measures are implemented to protect user data and prevent unauthorized access. Continuous integration and continuous deployment (CI/CD) practices help streamline the development workflow. App performance optimization is essential for providing a smooth user experience and ensuring efficient resource utilization. Mobile apps often leverage device features like GPS, camera, and sensors to offer enhanced functionalities. The app store submission process involves adhering to platform-specific guidelines and standards. Regular updates and maintenance are necessary to address bugs, introduce new features, and stay compatible with evolving technology and user needs</p>
                    </div>
                  </div>
                  <div class="col-12 order-md-0 col-md-4 col-xxl-4">
                    <div class="text-center text-md-start me-md-3 me-xl-5">
                      <p class="mb-4">
                        
                        <span class="fs-4 text-secondary">For more details</span>
                      </p>
                      <div class="d-grid">
                      <Link to="/contactus"><button class={`btn btn-primary btn-lg ${style.btn}`} type="button"> CONTACT US </button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
    )
}
export default MobileApp