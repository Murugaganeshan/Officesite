import Inter from "../Assets/Images/inter.jpg"
import "../Assets/Css/career.css"
import {useRef} from 'react';
let Carrers=()=>{
    const ref = useRef(null);

  const handleClick = () => {
    
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
    return(
        <div className="container-fluid">
           <div className="container">
            <div className="row row-cols-lg-2 row-cols-md-2  row-cols-sm-1 row-cols-1 justify-content-center py-3 "> 
            <div className="col">
<div className="card details">
    <h1> JOIN OUR TEAM </h1>
    <h3>Come work with us</h3>
   
</div>
<button onClick={handleClick} className="view-opening">
        View Opening

    </button>
            </div>
            <div className="col">
            <div>
            <img className="img-fluid" src={Inter} alt=""/>
        </div>
</div>

            </div>
           </div>
          <div className="container my-4">
            <h3 className="text-center"> "We will succeed by providing the best service, <br/> driven by the most effective operation and smartest technology."</h3>
          </div>
           <h1 className="current my-4" ref={ref}>
            Current Opening
           </h1>

          

<div className="container-xl my-4" >
        
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1  row-cols-1 d-flex justify-content-center my-3">
        
         
        <div  className="col pb-4 my-3">
                <div class="card-shop card ">
               <h2>Business Development Executive</h2>
                  
                    <ul>
        <li>Lorem gfdgdfgipsumdfsdfdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</li>
        <li>LofdsfsdfsdfsLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumdrem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
    </ul>
   
                   
                    <div className="  col ">
                    <div  className="mx-3 d-flex justify-content-start btn_pre">  
                   
              <a href="fksdlf"> <button  type="button" class="btn-preview "> Apply </button></a> 

                   </div>
                    </div>
                 
                  
                
                </div>
              </div>

              <div  className="col pb-4 my-3">
                <div class="card-shop card ">
               <h2>Business Development Executive</h2>
                  
                    <ul>
        <li>Lorem gfdgdfgipsumdfsdfdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</li>
        <li>LofdsfsdfsdfsLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumdrem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
    </ul>
   
                   
                    <div className="  col ">
                    <div  className="mx-3 d-flex justify-content-start btn_pre">  
                   
              <a href="fksdlf"> <button  type="button" class="btn-preview "> Apply </button></a> 

                   </div>
                    </div>
                 
                  
                
                </div>
              </div>

              <div  className="col pb-4 my-3">
                <div class="card-shop card ">
               <h2>Business Development Executive</h2>
                  
                    <ul>
        <li>Lorem gfdgdfgipsumdfsdfdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</li>
        <li>LofdsfsdfsdfsLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumdrem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
    </ul>
   
                   
                    <div className="  col ">
                    <div  className="mx-3 d-flex justify-content-start btn_pre">  
                   
              <a href="fksdlf"> <button  type="button" class="btn-preview "> Apply </button></a> 

                   </div>
                    </div>
                 
                  
                
                </div>
              </div>
              <div  className="col pb-4 my-3">
                <div class="card-shop card ">
               <h2>Business Development Executive</h2>
                  
                    <ul>
        <li>Lorem gfdgdfgipsumdfsdfdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</li>
        <li>LofdsfsdfsdfsLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumdrem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
    </ul>
   
                   
                    <div className="  col ">
                    <div  className="mx-3 d-flex justify-content-start btn_pre">  
                   
              <a href="fksdlf"> <button  type="button" class="btn-preview "> Apply </button></a> 

                   </div>
                    </div>
                 
                  
                
                </div>
              </div>
              <div  className="col pb-4 my-3">
                <div class="card-shop card ">
               <h2>Business Development Executive</h2>
                  
                    <ul>
        <li>Lorem gfdgdfgipsumdfsdfdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</li>
        <li>LofdsfsdfsdfsLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumLofdsfsdfsdfsdrem ipsumdrem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
    </ul>
   
                   
                    <div className="  col ">
                    <div  className="mx-3 d-flex justify-content-start btn_pre">  
                   
              <a href="fksdlf"> <button  type="button" class="btn-preview "> Apply </button></a> 

                   </div>
                    </div>
                 
                  
                
                </div>
              </div>
           
              </div>
             
          
      

      </div>
        </div>
    )
}
export default Carrers