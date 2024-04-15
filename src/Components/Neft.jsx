import img from "./Assest/cripto.jpg"
import { Link } from "react-router-dom"
import style from "./mobileapp.module.css"

let Neft=()=>{
    return(
        <div>
                        
              <section class="py-3 py-md-5">
                <div class="container mb-4 mb-md-5">
                  <div class="row justify-content-md-center">
                    <div class="col-12 col-md-10 col-xxl-8">
                      <img class="img-fluid rounded shadow" loading="lazy" src={img} alt="About 3"/>
                    </div>
                  </div>
                </div>

                <div class="container overflow-hidden">
                  <div class="row gy-2 gy-md-0 justify-content-xxl-center">
                    <div class="col-12 order-md-1 col-md-8 col-xxl-6">
                      <div class="text-center text-md-start">
                        <h2 class="display-3 fw-bold lh-1">NEFT</h2>
                        <p class="text-secondary fs-4 mb-2">Description</p>
                        <hr class="w-25 mx-auto ms-md-0 mb-4 text-secondary"/>
                        <p>NFT marketing thrives on captivating content and storytelling to forge connections with audiences.
                            Building vibrant communities around NFT projects fosters engagement and loyalty among collectors.
                            Collaborating with influencers and celebrities amplifies visibility and credibility within the NFT ecosystem.
                            Hosting exclusive events like drops and auctions adds excitement and exclusivity to NFT launches.
                            Educational initiatives play a pivotal role in onboarding newcomers to the world of NFTs and blockchain technology.
                            Strategic partnerships with aligned brands and platforms extend reach and diversify marketing channels.
                            Transparency in transactions and authenticity of digital assets are essential for trust and credibility.
                            Embracing gamification strategies enhances user engagement and fosters a sense of participation.
                            Regular innovation and adaptation to emerging trends are crucial for staying relevant in the competitive NFT market.
                            Overall, NFT marketing is a dynamic landscape that requires creativity, community focus, and strategic execution to succeed.
                            </p>

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
export default Neft