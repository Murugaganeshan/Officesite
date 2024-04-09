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
          <p>NEFT (National Electronic Funds Transfer) is an electronic payment system that facilitates the transfer of funds from one bank account to another within India. It operates on a deferred net settlement (DNS) basis, where transactions are processed in batches at set intervals throughout the day.

                NEFT transactions can be initiated through various channels, including internet banking, mobile banking, ATMs, or by visiting a bank branch. Customers need to provide details such as the recipient's account number, IFSC (Indian Financial System Code) of the recipient's bank branch, and the amount to be transferred.

                NEFT transactions are processed in hourly batches during the working hours of banks on weekdays and Saturdays, except for the second and fourth Saturdays and bank holidays. There are no minimum or maximum transaction limits imposed by the Reserve Bank of India (RBI) for NEFT transactions.

                NEFT transfers are typically settled within two hours from the time of initiation, although the actual time may vary depending on factors such as the bank's processing time and the timing of the transaction initiation. NEFT transfers are subject to nominal fees, which vary depending on the amount transferred.

                NEFT is widely used for various purposes, including salary payments, bill payments, funds transfer between accounts held by individuals, businesses, and institutions. It offers a convenient and reliable means of transferring funds electronically across different banks and geographical locations within India. However, NEFT operates on a deferred settlement basis, which means that funds are not transferred instantly but within a specified time frame.
</p>
        </div>
      </div>
      <div class="col-12 order-md-0 col-md-4 col-xxl-4">
        <div class="text-center text-md-start me-md-3 me-xl-5">
          <p class="mb-4">
            
            <span class="fs-4 text-secondary">For more details</span>
          </p>
          <div class="d-grid">
            <button class={`btn btn-primary btn-lg ${style.btn}`} type="button"> <Link to="/contactus">CONTACT US</Link> </button>
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