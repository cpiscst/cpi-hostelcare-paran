import { createBrowserRouter } from "react-router";
import Home from "../page/Home";
import MainLayout from "../layout/MainLayout";
import About from "../page/About";
import Contact from "../page/Contact";
import SignIn from "../page/SignIn";
import Signup from "../page/Signup";
import Dashboard from "../page/Dashboard";



const routes=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path: "/",
                element: <Home/>,
              },
              {
                path: "/about",
                element: <About/>,
              },
              {
                path: "/contact",
                element: <Contact/>,
              },
              {
                path: "/signIn",
                element: <SignIn/>,
              },
              {
                path: "/signUp",
                element: <Signup/>,
              },
              {
                path: "/dashboard",
                element: <Dashboard/>,
              },
        ]
    }
])

export default routes