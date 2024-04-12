
import { BrowserRouter,Routes, Route} from "react-router-dom"
import Nav from "./Components/Nav"
import About from "./Components/About"
import Service from "./Components/Service"
import Carrers from "./Components/Carrers"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Submitform from "./Components/Submitform"
import MobileApp from "./Components/MobileApp"
import Webdevelopment from "./Components/WebDevelopment"
import Uiux from "./Components/Uiux"
import Aidevelopment from "./Components/Aidevelopment"
import Cripto from "./Components/Cripto"
import Neft from "./Components/Neft"
import Discovermore from "./Components/Discovermore"



let App=()=>{

    return (
        <div>
        <BrowserRouter>
        <Nav></Nav>
        <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<About/>} path="/about"></Route>
        <Route element={<Service/>} path="/service"></Route>
        <Route element={<Carrers/>} path="/careers"></Route>
        <Route element={<Contact/>} path="/contactus"></Route>
        <Route element={<Submitform/>} path="/apply"></Route>
        <Route element={<MobileApp/>} path="/mobileapp"></Route>
        <Route element={<Webdevelopment/>} path="/webdevelopment"></Route>
        <Route element={<Uiux/>} path="/uiux"></Route>
        <Route element={<Aidevelopment/>} path="/aidevelopment"></Route>
        <Route element={<Cripto/>} path="/cripto"></Route>
        <Route element={<Neft/>} path="/neft"></Route>
        <Route element={<Discovermore/>} path="/discovermore"></Route>
        </Routes>
        </BrowserRouter>
        </div>
    );
}
export default App




