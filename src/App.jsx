
import room from "../src/assets/room.jpg"
import meal from "../src/assets/meal.jpg"
import event from "../src/assets/event.jpg"
import security from "../src/assets/security.jpg"
import wifi from "../src/assets/wifi.jpg"
import cleaning from "../src/assets/cleaning.jpg"
import home_tutor from "../src/assets/home_tutor.jpg"
import facebook from "../src/assets/facebook.png"
import linked from "../src/assets/linked.png"
import twiter from "../src/assets/twiter.png"
import insta from "../src/assets/insta.png"
import gmail from "../src/assets/gmail.png"
import mobile from "../src/assets/mobile.png"
import location from "../src/assets/location.png"


import banner from "../src/assets/banner.jpg"
import hostelImage from '../src/assets/hostel.jpg'
import logo from '../src/assets/logo.jpg.png'
import person1 from '../src/assets/person1.jpg'
function App() {

  return (
    <>
    
      <div className='max-w-[1200px] my-0 mx-auto' >
        {/* Navbar Section */}
        <nav className='flex justify-between items-center bg-orange-100 
        h-[60px] '>

          <div>
          <img className='h-[70px] w-[60px]' src={logo} alt='Logo'/>
            {/* <a href={"/"}>
            <img className='h-[50px] w-[50px]' src={logo} alt='Logo'/>
            </a> */}
          
          </div>

          <div>
            <ul className='flex space-x-3 text-gray-800 text-xl'>
              <li className='cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2'>Home</li>
              <li className='cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2'>About</li>
              <li className='cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2'>Contact</li>
              <li className='cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2'>Blog</li>
            </ul>
          </div>

          <div className='space-x-2'>
            <button className='p-2 cursor-pointer bg-purple-300 text-black rounded'>SignIn</button>
            <button className='p-2 bg-blue-300 cursor-pointer text-black rounded'>SignUp</button>
          </div>
        </nav>




        {/* Bannar Section */}
        <div
      
        className= "h-[500px] w-full  flex justify-between sm:bg-[url(../src/assets/banner.jpg)] opacity-70 object-cover bg-no-repeat bg-right   border-gray-200 p-2">

               
                 <div className='h-full flex justify-center items-center'>
                 <div className='text-center'>
                 <h2 className='md:text-5xl text-3xl font-bold uppercase text-gray-900 text-center'>Welcome 
                    <span className='block'>to</span> 
                    <span className='block '>
                      <span className='text-purple-400'>Cpi</span> Hostel Care</span>
                  </h2>
                  <button className='border-2 p-3 mt-5 bg-amber-500 text-white rounded-xl px-10 text-xl font-semibold'>Get Started</button>
                  </div>
                  
                 </div>
            
        </div>
                    {/* Service Section */}
        <div>
          <h2 className='text-5xl text-center py-10 font-bold'>Our Service</h2>

         <div className='grid grid-cols-3 gap-5 '>
         <div className=' h-[100px] w-full bg-gray-300  rounded border-2 border-gray-400 flex items-center justify-center'>
              <img  className="w-[50px] h-[50px]" src={room} alt="room" />
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Room</h6>
          </div>

          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
            <img className="w-[50px] h-[50px]" src={meal} alt="meal"/>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Meal</h6>
          </div>

          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
          <img  className="w-[50px] h-[50px]" src={event} alt="event"/>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Event</h6>
          </div>

          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
          <img className="w-[70px] h-[70px]" src={security} alt="security"/>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Security</h6>
          </div>
          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
          <img className="w-[50px] h-[50px] icon=left" src={wifi} alt="wifi"/>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>WiFi</h6>
          </div>
          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
          <img className="w-[180px] h-[100px]" src={cleaning} alt="cleaning"/>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Cleaning</h6>
          </div>
          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
          <img className="w-[50px] h-[50px]" src={home_tutor} alt="home_tutor"/>
          
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Home Tutor</h6>
          </div>
         </div>
        </div>






        {/* Our Member */}
        <div className='mt-10'>
          <h2 className='text-5xl font-bold text-center my-8'>Our Member</h2>
          <div className='grid grid-cols-3 gap-5'> 

              <div className='h-[350px] border-2 rounded-xl'>
                <figure className='flex justify-center pt-1'>
                <img src={person1} alt='Member Image'></img>
                </figure>
                <div className='p-6 text-center'>
                <h6 className='text-3xl font-semibold '>Chomchom Ali</h6>
                <p>Hostel Super</p>
              </div>
              </div>
              
              <div className='h-[350px] border-2 rounded-xl'>
                <figure className='flex justify-center pt-1'>
                <img src={person1} alt='Member Image'></img>
                </figure>
                <div className='p-6 text-center'>
                <h6 className='text-3xl font-semibold '>Kashem Ali</h6>
                <p>Hostel Super</p>
              </div>
              </div>

              <div className='h-[350px] border-2 rounded-xl'>
                <figure className='flex justify-center pt-1'>
                <img src={person1} alt='Member Image'></img>
                </figure>
                <div className='p-6 text-center'>
                <h6 className='text-3xl font-semibold '>Abdul Ali</h6>
                <p>Hostel Super</p>
              </div>
              </div>
          </div>
        </div>
        <h1 className="text-center text-5xl font-bold">Contact us</h1>
        <div className="w-full  grid grid-cols-2">

<div>
<div className="flex pt-2">
        <img  className="w-[40px] h-[40px] " src={location} alt='location'/>
         <div className="text-left">
         <h3 className="text-2xl  p-1">
              Address
          </h3>
          <p  className="text-[20px]"> Academy road, Feni sadar, Feni,chitagong,Bangladesh</p>
         </div>
        </div>
        <div className="flex pt-3" >
        <img className="w-[40px] h-[40px] " src={gmail} alt='gmail'/>
          <h3 className="text-2xl p-2">
             Gmail
          </h3>
        </div>
        <div className="flex">
        <img  className="w-[40px] h-[40px] " src={mobile} alt='mobile'/>
          <h3 className="text-2xl  p-1">
              Mobile
          </h3>
        </div>
</div>
<div className="w-[250px] h-[350px] bg-amber-400 mt-6">
  <h1  className="text-2xl font-bold">send your message</h1>
<div className="mt-8 p-4  ">
<input  className=" p-3 border-b" type="text" placeholder="Full name"/>
<input className=" p-3 border-b" type="text" placeholder="Email"/>
<input className=" p-3 border-b" type="text" placeholder="Text your message....."/>
<button className="text-xl w-[60px] h-[50px] font-bold p-2 rounded-md  bg-green-400 mt-5"> Send</button>
</div>
</div>

        
        </div>
        
          <footer className=" mt-10 p-10 grid grid-cols-3 text-center gap-5 bg-gray-400 text-white">
            <div className="space-y-8">
            <h4 className="text-xl uppercase">Useful Link</h4>
              
              <div className="space-y-1">
              <p><a href="/">About</a></p>
            <p> <a href="/">Services</a></p>
           <p><a href="/">Contact</a></p>
            <p><a href="/">Shop</a></p>
            <p><a href="/">Blog</a></p>
              </div>
            
            </div>
            <div className="space-y-8">
            <h4 className="text-xl uppercase">NEWSLETTER</h4>
              <form>
              <input type="text" className=" w-[300px] h-[40px] bg-white"/>
              </form>
            <button className="px-10 border-2 rounded-xl py-2 font-bold text-md   ">Subscribe Now</button>
            </div>
            <div className="space-y-8">
              <h4 className="text-xl uppercase"> Contact </h4>
              <div className="space-y-1">
              <p> Academy road ,Feni sadar ,Feni ,Chattogram ,Bangladesh</p>
              <div className="flex justify-center items-center gap-5">
                <img className="w-8 h-8" src={facebook} alt="Fecebook"/>
                <img className="w-8 h-8" src={linked} alt="Linkedin"/>
                <img className="w-8 h-8"  src={twiter} alt="Twiter"/>
                <img className="w-8 h-8"  src={insta} alt="Instagram"/>

              </div>
              </div>
            </div>

           
           
          </footer>
        
      </div>
    </>
  )
}

export default App
