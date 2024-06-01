import { BrowserRouter,Routes, Route} from "react-router-dom"
import Nav from "./Components/Nav"
import About from "./Components/About"
import Service from "./Components/Service"
import Carrers from "./Components/Carrers"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Submitform from "./Components/Submitform"
import Mobile from "./Pages/Mobileapp"
import Webdevelopment from "./Components/WebDevelopment"
import Uiux from "./Components/Uiux"
import Aidevelopment from "./Components/Aidevelopment"
import Cripto from "./Components/Cripto"
import Neft from "./Components/Neft"
import { ToastContainer } from "react-toastify"
import Homepage from "./Pages/Home"
import Discover from "./Pages/Discover"
import Aboutpage from "./Pages/Aboutpage"
import Servicepage from "./Pages/Servicepage"
import Careerpage from "./Pages/Careerpage"
import Contactpages from "./Pages/Contactpage"


let App=()=>{
 

    return (
        
        <div>
             <Nav></Nav>

              <ToastContainer />
                    <BrowserRouter>
                  
                    <Routes>          
                    <Route element={<Homepage/>} path="/"></Route>
                    <Route element={<Homepage/>} path="homepage"></Route>
                    <Route element={<Aboutpage/>} path="/about"></Route>
                    <Route element={<Servicepage/>} path="/service"></Route>
                    <Route element={<Careerpage/>} path="/career"></Route>
                    <Route element={<Contactpages/>} path="/contact"></Route>
                    <Route element={<Submitform/>} path="/apply"></Route>
                    <Route element={<Mobile/>} path="/mobileapp"></Route>
                    <Route element={<Webdevelopment/>} path="/webdevelopment"></Route>
                    <Route element={<Uiux/>} path="/uiux"></Route>
                    <Route element={<Aidevelopment/>} path="/aidevelopment"></Route>
                    <Route element={<Cripto/>} path="/cripto"></Route>
                    <Route element={<Neft/>} path="/neft"></Route>
                    <Route element={<Discover/>} path="/discover"></Route>
                    </Routes>
                    </BrowserRouter>
        </div>
    );
}
export default App