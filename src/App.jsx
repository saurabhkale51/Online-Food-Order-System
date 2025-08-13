<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Contact from "./Pages/Contact";




export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  )
}
=======
>>>>>>> 5469cb48eedc666d422906f15dc339ad629012a9
