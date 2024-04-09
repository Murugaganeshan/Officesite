import { IoIosArrowDropdownCircle } from "react-icons/io";
import "../Assets/Css/Submitform.css"
let Submitform=()=>{
  
return(
    <div className="container py-5">
  
     <div className="row justify-content-center"> 
 {/* <div className="col-7 ">
    <div className="card form-card"> 

                <form  >
 <h1 className="text-center application">Job Application</h1>

  <div class="form-group">
    <input type="text" name="user_name" class="form-control email"  placeholder="Name"/>
  </div>
  <div class="form-group">
    <input type="email" name="user_email" class="form-control email"  placeholder="Email"/>
  </div>
  <div class="form-group">
    <input type="contact" name="user_name" class="form-control email"  placeholder="Mobile Number"/>
  </div>
  <div className="row row-cols-md-2 row-cols-1 justify-content-between ">
  <div class="form-group">
  <select id="inputState" class="form-control email">
        <option selected>Choose Position...</option>
        <option>Backend (Nodejs)</option>
        <option>Digital Marketing</option>

        <option>Business Development Executive</option>

        <option>Backend (Nodejs)</option>

      </select>
  </div>
  <div class="form-group">
    <input type="contact" name="user_name" class="form-control email"  placeholder="Experience"/>
  </div>
  </div>
 
  <div>
  <input class="form-control form-control-lg email" id="formFileLg" type="file"/>
</div>
<div className="Submit_form">
  <button type="submit" value="Send" class=" Sign">SUBMIT</button>
  </div>
</form>
</div>

                </div> */}
                <div className="col-6">
                  <h1 className="text-center">Job Application</h1>
                <form className="my-5"  >
  <div class="form-group">
    <input type="text" name="user_name" class="form-control email"  placeholder="Name"/>
  </div>
  <div class="form-group">
    <input type="email" name="user_email" class="form-control email"  placeholder="Your Email"/>
  </div>
  <div class="form-group">
    <input type="email" name="user_email" class="form-control email"  placeholder="Contact"/>
  </div>
  <div className="row row-cols-md-2 row-cols-1 justify-content-between ">
  <div class="form-group">
  <select id="inputState" class="form-control email">
        <option selected>Choose Position...</option>
        <option>Backend (Nodejs)</option>
        <option>Digital Marketing</option>

        <option>Business Development Executive</option>

        <option>Backend (Nodejs)</option>

      </select>
  </div>
  <div class="form-group">
    <input type="contact" name="user_name" class="form-control email"  placeholder="Experience"/>
  </div>
  </div>

  <div class="form-group ">
    <textarea class="form-control email" name="message"  placeholder="Text your message here..." rows="5"></textarea>
  </div>
  <div>
  <input class="form-control form-control-lg email" id="formFileLg" type="file"/>
</div>
 
 
 <div className="Submit_form"> 
  <button type="submit" value="Send">Submit</button>
  </div>
</form>

                </div>
                </div>
    </div>
)

}
export default Submitform