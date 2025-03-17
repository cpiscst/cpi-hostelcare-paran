

const Signup = () => {
  return (
    <div>
      
      <div className="flex justify-between p-4">
        <div>
       
        </div>
        <div className="grid grid-cols-2 space-y-2">
            <div>
              <input
                className="border-2 rounded-md h-[40px] w-[200px] font-bold"
                type="text"
                placeholder="First Name" />
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
                placeholder=" Guardian Mobile Number"
              />
            </div>
          
          <button className=" text-center bg-stone-200 w-[100px] h-[30px] rounded-xl font-bold">Submit</button>
          
          
          </div>
      </div>
    </div>
  );
};

export default Signup;
