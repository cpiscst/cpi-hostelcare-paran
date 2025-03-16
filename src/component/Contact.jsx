import icon from "../assets/icon.jpg"
const Contact = () => {
    return (
        <div className="w-full mt-10 bg-stone-50">
        <h1 className="text-center text-5xl font-bold py-10 ">Contact us</h1>
  <div className="grid grid-cols-2 ">
  <div>
  
  <img  className="w-full h-[450px]" src={icon} alt="icon"/>
  </div>
  <diV >
    
    <h1  className="text-2xl font-bold p-2">Send your message</h1>
<div className="mt-8 p-3">
<input  className=" p-3 w-[400px] block border-b-3 my-2 bg-gray-300 rounded-2xl" type="text" placeholder="Full name"/>
<input className=" p-3  w-[400px] block  border-b-3 my-2 bg-gray-300 rounded-2xl" type="text" placeholder="Email"/>
<input className=" p-3 w-[400px]  block border-b-3 my-2 bg-gray-300 rounded-2xl" type="text" placeholder="Text your message....."/>
<button className="text-xl px-15 bg-blue-400 text-white font-bold p-2 rounded-md  mt-5"> Send</button>
</div>
  </diV>

  </div>
        
        </div>
    );
};

export default Contact;