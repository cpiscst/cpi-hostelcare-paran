

import banner from "../src/assets/banner.jpg"
import hostelImage from '../src/assets/hostel.jpg'
import person1 from '../src/assets/person1.jpg'
function App() {

  return (
    <>
    
      <div className='max-w-[1200px] my-0 mx-auto' >
        {/* Navbar Section */}
        <nav className='flex justify-between items-center bg-gray-300 h-[60px] px-2'>
          <div>
            {/* <a href={"/"}>
            <img className='h-[50px] w-[50px]' src={logo} alt='Logo'/>
            </a> */}
           <a href='/'>
           <h2 className='uppercase font-bold text-2xl text-gray-700'>
           <span className=' pr-1'>CPI</span>Hostel Care</h2>
           </a>
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
            <button className='p-2 cursor-pointer bg-purple-600 text-white rounded'>SignIn</button>
            <button className='p-2 bg-blue-400 cursor-pointer text-white rounded'>SignUp</button>
          </div>
        </nav>




        {/* Bannar Section */}
        <div
      
        className= "h-[500px] w-full  flex justify-between sm:bg-[url(../src/assets/banner.jpg)] opacity-70 object-cover bg-no-repeat bg-right  border-2 border-gray-200 p-2">

               
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
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Room</h6>
          </div>

          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Meal</h6>
          </div>

          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Event</h6>
          </div>

          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Security</h6>
          </div>
          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>WiFi</h6>
          </div>
          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Clening</h6>
          </div>
          <div className=' h-[100px] w-full rounded border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
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
      </div>
    </>
  )
}

export default App
