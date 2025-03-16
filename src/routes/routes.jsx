import { Route, Routes } from "react-router";
import About from "../page/About";
import Contact from "../page/Contact";
import SignIn from "../page/SignIn";
import Signup from "../page/Signup";




<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/signIn" element={<SignIn/>}/>
<Route path="/signUp" element={<Signup/>}/>
</Routes>