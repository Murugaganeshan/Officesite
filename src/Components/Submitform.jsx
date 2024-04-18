import "../Assets/Css/Submitform.css"
import "../Assets/Css/Submitform.css";
import interview from "./Assest/aa.png";
import Footer from "./Footer";

let Submitform = () => {
  return (
    <div> 
      <div style={{ backgroundImage: `url(${interview})`}}>
        <div className="container py-5">
          <div className="row justify-content-center"> 
            <div className="col-6 glass">
              <h1 className="text-center" style={{color:"white"}}>Job Application</h1>
              <form className="my-5">
                <div className="form-group">
                  <input type="text" name="user_name" className="form-control email" placeholder="Name"/>
                </div>
                <div className="form-group">
                  <input type="email" name="user_email" className="form-control email" placeholder="Your Email"/>
                </div>
                <div className="form-group">
                  <input type="email" name="user_email" className="form-control email" placeholder="Contact"/>
                </div>
                <div className="row row-cols-md-2 row-cols-1">
                  <div className="form-group col">
                    <select id="inputState" className="form-control email" style={{width:"100%"}}>
                      <option selected>Choose Position...</option>
                      <option>Backend (Nodejs)</option>
                      <option>Digital Marketing</option>
                      <option>Business Development Executive</option>
                      <option>Backend (Nodejs)</option>
                    </select>
                  </div>
                  <div className="form-group col">
                    <input type="contact" name="user_name" className="form-control email" placeholder="Experience" style={{width:"100%"}}/>
                  </div>
                </div>
                <div className="form-group">
                  <textarea style={{ width:"100%", padding:"8px"}} className="email" name="message" placeholder="Text your message here..." rows="5"></textarea>
                </div>
                <div>
                  <input className="form-control form-control-lg email" id="formFileLg" type="file"/>
                </div>
                <div className="Submit_form"> 
                  <button type="button" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div> 
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Submitform;
