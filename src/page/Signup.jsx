const Signup = () => {
  return (
    <div>
      
      <div className="flex justify-between p-4">
        <div className="">
         <img src=""></img>
        </div>
        <div className="grid grid-cols-2 space-y-2">
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[200px] font-bold"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[200px] font-bold"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[200px] font-bold"
                type="text"
                placeholder="Department"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[200px] font-bold"
                type="text"
                placeholder="Roll"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[200px] font-bold"
                type="text"
                placeholder="Reg.No"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[100px] font-bold"
                type="text"
                placeholder="Session"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[100px] font-bold"
                type="text"
                placeholder="Semester"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[300px] font-bold"
                type="text"
                placeholder="E-mail"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[200px] font-bold"
                type="text"
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[300px] font-bold"
                type="text"
                placeholder="Address"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[200px] font-bold"
                type="text"
                placeholder=" G.Mobile Number"
              />
            </div>
          
          <button>Submit</button>
          
          
          </div>
      </div>
    </div>
  );
};

export default Signup;
