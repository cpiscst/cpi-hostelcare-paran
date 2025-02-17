


import logo from '../src/assets/cpi-logo.jpg'

function App() {

  return (
    <>
      <div >
        <nav className='flex justify-between items-center bg-gray-300 '>
          <div>
            <a href={"/"}>
            <img className='h-[50px] w-[50px]' src={logo} alt='Logo'/>
            </a>
          </div>

          <div>
            <ul className='flex space-x-3 text-gray-800'>
              <li className='cursor-pointer hover:text-black'>Home</li>
              <li className='cursor-pointer hover:text-black'>About</li>
              <li className='cursor-pointer hover:text-black'>Contact</li>
              <li className='cursor-pointer hover:text-black'>Blog</li>
            </ul>
          </div>

          <div className='space-x-2'>
            <button className='p-2 bg-blue-600 text-white rounded'>SignIn</button>
            <button className='p-2 bg-blue-600 text-white rounded'>SignUp</button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default App
