import room from "../assets/room.jpg"
import meal from "../assets/meal.jpg"
import event from "../assets/event.jpg"
import security from "../assets/security.jpg"
import wifi from "../assets/wifi.jpg"
import cleaning from "../assets/cleaning.jpg"
import home_tutor from "../assets/home_tutor.jpg"
const Service = () => {
    return (
        <div>
          <h2 className='text-5xl text-center py-10 font-bold'>Our Service</h2>

         <div className='grid grid-cols-3 gap-5 '>
         <div className=' h-[100px] w-full bg-gray-300  rounded-2xl border-2 border-gray-400 flex items-center justify-center'>
              <img  className="w-[50px] h-[50px]" src={room} alt="room" />
              <h6 className='uppercase text-3xl font-semibold text-center p-3 text-gray-800'>Room</h6>
          </div>

          <div className=' h-[100px] w-full rounded-2xl border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
            <img className="w-[50px] h-[50px]" src={meal} alt="meal"/>
              <h6 className='uppercase text-3xl font-semibold p-2 text-center text-gray-800'>Meal</h6>
          </div>

          <div className=' h-[100px] w-full rounded-2xl border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
          <img  className="w-[50px] h-[50px]" src={event} alt="event"/>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Event</h6>
          </div>

          <div className=' h-[100px] w-full rounded-2xl border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
          <img className="w-[70px] h-[70px]" src={security} alt="security"/>
              <h6 className='uppercase text-3xl font-semibold text-center text-gray-800'>Security</h6>
          </div>
          <div className=' h-[100px] w-full rounded-2xl border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
          <img className="w-[50px] h-[50px] icon=left" src={wifi} alt="wifi"/>
              <h6 className='uppercase text-3xl font-semibold text-center p-3 text-gray-800'>WiFi</h6>
          </div>
          <div className=' h-[100px] w-full rounded-2xl border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
          <img className="w-[180px] h-[100px]" src={cleaning} alt="cleaning"/>
              <h6 className='uppercase text-3xl font-semibold text-center  text-gray-800'>Cleaning</h6>
          </div>
          <div className=' h-[100px] w-full  rounded-xl border-2 border-gray-400 flex items-center justify-center bg-gray-300'>
          <img className="w-[50px] h-[50px]" src={home_tutor} alt="home_tutor"/>
          
              <h6 className='uppercase text-3xl font-semibold text-center p-3 text-gray-800'>Home Tutor</h6>
          </div>
         </div>
        </div>
    );
};

export default Service;