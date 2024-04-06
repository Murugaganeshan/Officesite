import hero from "./Assest/hero-bg.jpg"
import About from "./About"
let Home=()=>{
    return(
        <div>
             <div className="container-fluid">
                <img className='img-fluid' src={hero} alt="" height={100} />
            </div>
            <About></About>
        </div>
    )
}
export default Home