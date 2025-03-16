import React from 'react';
import Navbar from '../component/Navber';
import Footer from '../component/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='max-w-[1200px] my-0 mx-auto' >
           <Navbar/>
                    <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;