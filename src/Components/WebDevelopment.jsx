import { Link } from "react-router-dom"
import style from "./mobileapp.module.css"
import video from "./Assest/webDevelopmentVideo.mp4"


let Webdevelopment=()=>{

    return(
            <div className={style.back}>
                  <section class="py-3 py-md-5">
                    <div class="container mb-4 mb-md-5">
                      <div class="row justify-content-md-center">
                        <div class="col-12 col-md-10 col-xxl-8">
                          {/* <img class="img-fluid rounded shadow" loading="lazy" src={webdevelopment} alt="About 3"/> */}
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
                            <h2 class="display-3 fw-bold lh-1">Web Development</h2>
                            <p class="text-secondary fs-4 mb-2">Description</p>
                            <hr class="w-25 mx-auto ms-md-0 mb-4 text-secondary"/>
                            <p>React.js is a JavaScript library primarily used for building user interfaces for single-page applications. It allows developers to create reusable UI components that can efficiently update when data changes. React's virtual DOM (Document Object Model) enables fast rendering by updating only the components that have changed. It follows a component-based architecture, making code modular and easier to maintain. React Router is commonly used for client-side routing, enabling navigation within single-page applications. Redux or Context API are often used for state management in larger applications, providing a predictable state container. React Native extends React's capabilities to mobile app development, allowing developers to build cross-platform mobile apps using JavaScript.

                              Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It enables developers to run JavaScript on the server-side, allowing for building scalable and high-performance web applications. Node.js is event-driven and non-blocking, making it suitable for handling asynchronous operations like I/O operations or network requests efficiently. It comes with a vast ecosystem of packages through npm (Node Package Manager), allowing developers to leverage libraries and frameworks to expedite development. Express.js is a popular web framework for Node.js, providing a minimalist and flexible approach for building web applications and APIs. Node.js is commonly used in microservices architecture, real-time applications, and serverless computing platforms like AWS Lambda or Google Cloud Functions. It's known for its performance, scalability, and versatility, making it a preferred choice for building modern web applications and services.</p>
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
export default Webdevelopment