import Inter from "../Assets/Images/inter.jpg"
import "../Assets/Css/career.css"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {useRef} from 'react';
let Carrers=()=>{
    const ref = useRef(null);

  const handleClick = () => {
    
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
    return(
        <div className="container-fluid" style={{backgroundColor:"white"}}>
           <div className="container">
            <div className="row row-cols-lg-2 row-cols-md-2  row-cols-sm-1 row-cols-1 justify-content-center py-3 "> 
            <div className="col">
<div className="card details">
    <h1> JOIN OUR TEAM </h1>
    <h3>Come work with us</h3>
    <h6 style={{lineHeight:"25px", marginTop:"10px"}}>Explore remote-friendly, flexible opportunities and join our mission to make work life simpler, more pleasant and more productive.</h6>
   
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

          
            <div className="container p-3">
            <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1 justify-content-center">
              <div className="col"> 
      
      
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <h5>Business Development Executive</h5>
        </AccordionSummary>
        <AccordionDetails>
          <h6>Experiece: 0-1 Year</h6>
          <h6>Skills</h6>
        <ul>
        <li>Strong communication skills, both verbal and written, are essential. You should be able to effectively communicate with clients, colleagues, and other stakeholders. </li>
        <li>Additionally, having basic sales skills and the ability to pitch products or services persuasively is important.</li>
        <li>Fluently in English.</li>
        <li> Employers value candidates who are adaptable and willing to learn new technologies. Highlight any experiences where you quickly picked up new skills or adapted to new challenges..</li>
    </ul> 
        </AccordionDetails>
        <AccordionActions>
        <div  className="mx-3 d-flex justify-content-start btn_pre p-2">  
                   
                   <a href="/apply"> <button  type="button" class="btn-preview "> Apply </button></a> 

                  </div>
        </AccordionActions>
      </Accordion>
    </div>
    <div className="col"> 
      
      
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
      <h5>Front End Developer</h5>
        </AccordionSummary>
        <AccordionDetails>
        <h6>Experiece: 0-1 Year</h6>
          <h6>Skills</h6>
          <ul>
        <li>Proficiency in HTML, CSS, and JavaScript is essential. These are the core technologies used in front-end development.</li>
        <li>Understanding of responsive design principles and experience with CSS preprocessors like Sass or Less.</li>
        <li>Expertise in React and related libraries for building modern web applications</li>
        <li>Ability to write well-documented, clean JavaScript code.</li>
        <li>Basic understanding of back-end technologies and how they interact with the front end. This might include knowledge of RESTful APIs, server-side rendering, or basic database operations.</li>
        <li>Knowledge of front-end frameworks and libraries such as React.js. Familiarity with at least one of these frameworks is often required.</li>
    </ul>
        </AccordionDetails>
        <AccordionActions>
        <div  className="mx-3 d-flex justify-content-start btn_pre p-2">  
                   
                   <a href="/apply"> <button  type="button" class="btn-preview "> Apply </button></a> 

                  </div>
        </AccordionActions>
      </Accordion>
    </div>
    <div className="col my-4"> 
      
      
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
           <h5>Back End Developer</h5>
        </AccordionSummary>
        <AccordionDetails>
        <h6>Experiece: 0-1 Year</h6>
          <h6>Skills</h6>
          <ul>
        <li>Good knowledge of Node.js with 1 year of minimum experience.</li>
        <li>Good exposure on Mongodb and Express.js.</li>
        <li>User authentication and authorization between multiple systems, servers, and environments.</li>
        <li>Integration of multiple data sources and databases into one system.</li>
        <li>Proficient understanding of code versioning tools, such as GitLab, GitHub, Bitbucket.</li>
         <li>Basic understanding of front-end technologies, such as HTML5, Bootstrap, and CSS3.</li>
    </ul>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
    <div className="col my-4"> 
      
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
           <h5>Back End Developer</h5>
        </AccordionSummary>
        <AccordionDetails>
        <h6>Experiece: 0-1 Year</h6>
          <h6>Skills</h6>
          <ul>
        <li>Good knowledge of Node.js with 1 year of minimum experience.</li>
        <li>Good exposure on Mongodb and Express.js.</li>
        <li>User authentication and authorization between multiple systems, servers, and environments.</li>
        <li>Integration of multiple data sources and databases into one system.</li>
        <li>Proficient understanding of code versioning tools, such as GitLab, GitHub, Bitbucket.</li>
         <li>Basic understanding of front-end technologies, such as HTML5, Bootstrap, and CSS3.</li>
    </ul>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
    <div className="col my-4"> 
      
      
      <Accordion >
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1-content"
         id="panel1-header"
        >
           <h5>Back End Developer</h5>
        </AccordionSummary>
        <AccordionDetails>
        <h6>Experiece: 0-1 Year</h6>
          <h6>Skills</h6>
          <ul>
        <li>Good knowledge of Node.js with 1 year of minimum experience.</li>
        <li>Good exposure on Mongodb and Express.js.</li>
        <li>User authentication and authorization between multiple systems, servers, and environments.</li>
        <li>Integration of multiple data sources and databases into one system.</li>
        <li>Proficient understanding of code versioning tools, such as GitLab, GitHub, Bitbucket.</li>
         <li>Basic understanding of front-end technologies, such as HTML5, Bootstrap, and CSS3.</li>
    </ul>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
    </div>

            </div>
        </div>
    )
}
export default Carrers