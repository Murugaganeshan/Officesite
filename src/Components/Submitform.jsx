import "../Assets/Css/Submitform.css"
import interview from "./Assest/aa.png"
import "./submitform.module.css"

let Submitform=()=>{
  
return(
    <div style={{ backgroundImage: `url(${interview})`}} >
       
      <div className="container py-5">
    
  
  <div className="row justify-content-center"> 
             <div className="col-6 glass">
               <h1 className="text-center" style={{color:"white"}}>Job Application</h1>
             <form className="my-5">
<div class="form-group">
 <input type="text" name="user_name" class="form-control email"  placeholder="Name"/>
</div>
<div class="form-group">
 <input type="email" name="user_email" class="form-control email"  placeholder="Your Email"/>
</div>
<div class="form-group">
 <input type="email" name="user_email" class="form-control email"  placeholder="Contact"/>
</div>
<div className="row row-cols-md-2 row-cols-1  ">
<div class="form-group col" >
<select id="inputState" class="form-control email" style={{width:"100%"}}>
     <option selected>Choose Position...</option>
     <option>Backend (Nodejs)</option>
     <option>Digital Marketing</option>
     <option>Business Development Executive</option>
     <option>Backend (Nodejs)</option>
</select>

</div>
<div class="form-group col ">
 <input type="contact" name="user_name" class="form-control email"  placeholder="Experience" style={{width:"100%"}}/>
</div>
</div>
<div class="form-group ">
 <textarea style={{ width:"100%", padding:"8px"}} class="email " name="message"  placeholder="Text your message here..." rows="5"></textarea>
</div>
<div>
<input class="form-control form-control-lg email" id="formFileLg" type="file"/>
</div>
<div className="Submit_form"> 
<button type="button" class="btn btn-primary">Submit</button>
</div>
</form>
</div>

                </div> */
             
 </div>
</div>
)}

export default Submitform;