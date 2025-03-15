import banner1 from "../assets/banner1.jpg";

const Banner = () => {
  return (
    <div className="items-center w-full  flex justify-between  bg-right   border-gray-200 p-2">
      <div>
        <div className="text-center">
          <h2 className="md:text-7xl text-3xl font-bold uppercase text-gray-900 text-center">
            Welcome
            <span className="block">to</span>
            <span className="block ">
              <span className="text-purple-400">Cpi</span> Hostel Care
            </span>
          </h2>
          <button className="border-2 p-3 mt-5 bg-amber-500 text-white rounded-xl px-10 text-xl font-semibold">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <img src={banner1} alt="banner1" />
      </div>
    </div>
  );
};

export default Banner;
