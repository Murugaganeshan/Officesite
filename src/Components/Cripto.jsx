// import img from "./Assest/cripto.jpg"
import { Link } from "react-router-dom"
import style from "../Assets/Css/mobileapp.module.css"
import Footer from "./Footer"
import video from "./Assest/cryptoVideo.mp4"
// import style from "../Assets/Css/mobileapp.module.css"

let Cripto=()=>{

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
                        <h2 class="display-3 fw-bold lh-1">Crypto Trading</h2>
                        <p class="text-secondary fs-4 mb-2">Description</p>
                        <hr class="w-25 mx-auto ms-md-0 mb-4 text-secondary"/>
                        <p style={{color:"grey"}}>Cryptocurrency trading involves buying and selling digital assets on exchanges with the goal of generating profits through price fluctuations. Traders employ various strategies, including technical analysis, fundamental analysis, and sentiment analysis, to make informed decisions about when to enter or exit trades.

                              Technical analysis involves analyzing historical price data, trading volume, and market indicators to identify patterns and trends that may indicate future price movements. Fundamental analysis evaluates the intrinsic value of a cryptocurrency based on factors such as its technology, team, adoption, and market demand.

                              Crypto traders often use trading bots or algorithms to automate trading strategies and execute trades based on predefined parameters. Risk management strategies, such as setting stop-loss and take-profit orders, are crucial to mitigate losses and protect capital.

                              Leverage trading allows traders to borrow funds from the exchange to increase their trading position size, amplifying potential profits but also magnifying potential losses. Margin trading involves trading with borrowed funds, using the trader's existing assets as collateral.

                              Cryptocurrency markets operate 24/7, providing traders with opportunities to trade at any time, but also increasing the risk of volatility and price fluctuations. Market sentiment, news events, regulatory developments, and macroeconomic factors can significantly impact cryptocurrency prices and trading activity.

                              Risk management, continuous learning, and staying updated with market trends and news are essential for success in cryptocurrency trading. It's important for traders to conduct thorough research, exercise caution, and only invest what they can afford to lose in such a volatile and speculative market.
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
              <Footer></Footer>
        </div>
    )
}
export default Cripto