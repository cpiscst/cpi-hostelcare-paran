




import Navbar from "./component/Navber"
import Banner from "./component/Banner"
import Service from "./component/Service"
import Member from "./component/Member"
import Contact from "./component/Contact"
import Footer from "./component/Footer"

function App() {

  return (
    <>
    
      <div className='max-w-[1200px]   my-0 mx-auto' >
        {/* Navbar Section */}
        
        <Navbar/>
        {/* Bannar Section */}
        <Banner/>
        
          {/* Service Section */}
       
        <Service/>



<Member/>

      <Contact/>
        
          
        <Footer/>
      </div>
    </>
  )
}

export default App
