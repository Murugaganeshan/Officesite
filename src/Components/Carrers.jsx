import Inter from "../Assets/Images/interview.png"
import "../Assets/Css/career.css"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import {useRef} from 'react';
import Contact from "./Contact"


let Carrers=()=>{

    const ref = useRef(null);

  const handleClick = () => {
    
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
    return(
      <div>
        
        <div className="container-fluid" style={{backgroundColor:" rgb(17, 40, 51)"}}>
           <div className="container">
            <div className="row row-cols-lg-2 row-cols-md-2  row-cols-sm-1 row-cols-1 justify-content-center py-3 "> 
            <div className="col">
<div className="card details" data-aos="fade-in">
    <h1 class="fs-1 carrersTitle"> JOIN OUR TEAM </h1>
    <h3 style={{color:"white",marginTop:"10"}} class="fs-3 carrersSubTitle">Come work with us</h3>
    <h6 className="fs-5 text-secondary">Explore remote-friendly, flexible opportunities and join our mission to make work life simpler, more pleasant and more productive.</h6>
</div>

            </div>
            <div className="col">
            <div className="my-5">
            <img className="img-fluid rounded " src={Inter} alt="Interview Image"/>
        </div>
</div>

            </div>  
           </div>
          <div className="container my-4 open" data-aos="fade-in">
            <h3 className="text-center fs-1 carrersSubTitle"> "We will succeed by providing the best service, <br/> driven by the most effective operation and smartest technology."</h3>
          </div>
           <h1 className="current my-4 fs-1 carrersTitle" ref={ref} data-aos="fade-in ">
            Current Openings
           </h1>
           <div className="acc">
           <div className="container p-3">
            <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1 justify-content-center">
              <div className="col my-3"> 

      <Accordion className="p-1" >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         <h5 cla>Business Development Executive</h5>
        </AccordionSummary>
        <AccordionDetails >
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
                   
                   <a href="/apply"> <button  type="button" class="btn btn-primary"> Apply </button></a> 

                  </div>
        </AccordionActions>
      </Accordion>
    </div>
    <div className="col my-3"> 
      
    
      <Accordion className="p-1" >
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
                   
                   <a href="/apply"> <button  type="button" class="btn btn-primary"> Apply </button></a> 

                  </div>
        </AccordionActions>
      </Accordion>
    </div>
    <div className="col my-3"> 
      <Accordion className="p-1">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
           <h5>Back End Developer</h5>
        </AccordionSummary>
        <AccordionDetails >
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
        <div  className="mx-3 d-flex justify-content-start btn_pre p-2">  
                   
                   <a href="/apply"> <button  type="button" class="btn btn-primary"> Apply </button></a> 

                  </div>
        </AccordionActions>
      </Accordion>
    </div>
    <div className="col my-3"> 
      
      
      <Accordion className="p-1">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
           <h5>Digital Marketing</h5>
        </AccordionSummary>
        <AccordionDetails >
        <h6>Experiece: 0-1 Year</h6>
          <h6>Skills</h6>
          <ul>
        <li>SEO (Search Engine Optimization): Understanding how search engines work and optimizing content to rank higher in search engine results pages (SERPs) is crucial for driving organic traffic to websites.</li>
        <li>Content Marketing: Creating valuable, relevant, and engaging content tailored to the target audience is essential for attracting and retaining customers. This includes blog posts, videos, infographics, and more.</li>
        <li>Social Media Marketing: Proficiency in leveraging various social media platforms (such as Facebook, Twitter, Instagram, LinkedIn, etc.) to build brand awareness, engage with the audience, and drive traffic to the website.</li>
        <li>PPC Advertising: Knowledge of Pay-Per-Click advertising platforms like Google Ads and Bing Ads to create and optimize campaigns that drive targeted traffic and conversions.</li>
        <li>Email Marketing: Ability to create effective email campaigns, manage subscriber lists, and analyze campaign performance to nurture leads and drive sales.</li>
         <li>Marketing Automation: Familiarity with marketing automation tools like HubSpot, Marketo, or Mailchimp to streamline repetitive tasks, nurture leads, and improve efficiency.</li>
    </ul>
        </AccordionDetails>
        <AccordionActions>
        <div  className="mx-3 d-flex justify-content-start btn_pre p-2">  
                   
                   <a href="/apply"> <button  type="button" class="btn btn-primary"> Apply </button></a> 

                  </div>
        </AccordionActions>
      </Accordion>
    </div>
  
    </div>
            </div>
           </div>
                   </div>
                   <Contact></Contact>
                    </div>
                 
           
             
      
    )
}
export default Carrers

