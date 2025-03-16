import React from 'react';
import Navbar from '../component/Navber';
import Banner from '../component/Banner';
import Service from '../component/Service';
import Member from '../component/Member';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Service />
            <Member />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;