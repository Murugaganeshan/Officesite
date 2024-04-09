
import { BrowserRouter,Routes, Route} from "react-router-dom"
import Nav from "./Components/Nav"
import About from "./Components/About"
import Service from "./Components/Service"
import Carrers from "./Components/Carrers"
import Contact from "./Components/Contact"
import Home from "./Components/Home"


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
       </Routes>
       </BrowserRouter>
        </div>
    );
}
export default App




