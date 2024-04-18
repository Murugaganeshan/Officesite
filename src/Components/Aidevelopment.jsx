// import img from "./Assest/ai.jpg"
import { Link } from "react-router-dom"
import style from "./mobileapp.module.css"
import video from "./Assest/aiVideo.mp4"

let Aidevelopment=()=>{
    return(
        <div className={style.back}>
          
              <section class="py-3 py-md-5">
                <div class="container mb-4 mb-md-5">
                  <div class="row justify-content-md-center">
                    <div class="col-12 col-md-10 col-xxl-8">
                      {/* <img class="img-fluid rounded shadow" loading="lazy" src={img} alt="About 3"/> */}
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
                        <h2 class="display-3 fw-bold lh-1">AI Development</h2>
                        <p class="text-secondary fs-4 mb-2">Description</p>
                        <hr class="w-25 mx-auto ms-md-0 mb-4 text-secondary"/>
                        <p>AI (Artificial Intelligence) development involves creating intelligent systems that can perceive, learn, and act autonomously to accomplish tasks traditionally requiring human intelligence. It encompasses various techniques and technologies, including machine learning, deep learning, natural language processing (NLP), computer vision, and robotics.

                              Machine learning algorithms enable systems to learn from data and make predictions or decisions without being explicitly programmed. Deep learning, a subset of machine learning, utilizes neural networks with multiple layers to process complex data and extract meaningful patterns.

                              Natural language processing (NLP) enables computers to understand, interpret, and generate human language, facilitating applications such as chatbots, language translation, and sentiment analysis.

                              Computer vision involves teaching machines to interpret and understand visual information from images or videos, enabling applications like object recognition, image classification, and autonomous vehicles.

                              AI development requires large datasets for training, robust algorithms, computational resources, and expertise in data science and programming. Ethical considerations such as bias mitigation, fairness, and transparency are critical in AI development to ensure responsible and ethical use of AI technologies.

                              Applications of AI span across various industries, including healthcare, finance, automotive, retail, and entertainment, revolutionizing processes, enhancing decision-making, and creating innovative products and services.

                              Continuous research and development in AI are driving advancements in areas like reinforcement learning, generative adversarial networks (GANs), explainable AI, and AI ethics, shaping the future of intelligent systems and their impact on society.
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
export default Aidevelopment