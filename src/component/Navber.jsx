import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav
        className="flex justify-between w-full items-center 
         "
      >
        <div>
          <img className="h-[100px] " src={logo} alt="Logo" />
          {/* <a href={"/"}>
            <img className='h-[50px] w-[50px]' src={logo} alt='Logo'/>
            </a> */}
        </div>

        <div>
          <ul className="flex space-x-3 items-center text-gray-800 text-xl">
            <li className="cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2">
              Home
            </li>
            <li className="cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2">
              About
            </li>
            <li className="cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2">
              Contact
            </li>
            <li className="cursor-pointer hover:text-white hover:bg-gray-400 py-4 px-2">
              Blog
            </li>
            <button className="p-2 h-[50px] cursor-pointer bg-[#ECE8DC] text-black rounded">
              SignIn
            </button>
            <button className="p-2 h-[50px] bg-[#FFCD68] cursor-pointer text-black rounded">
              SignUp
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
