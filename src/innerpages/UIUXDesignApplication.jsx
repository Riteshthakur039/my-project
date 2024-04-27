import React from 'react';
import uiuxDesignImage from '../assets/uiux-design.png'; 
import About from './About';
import Offer from '../components/Offer';
import { NavLink } from 'react-router-dom';

const UIUXDesignApplication = () => {
  const text =
    'Bring your ideas to life with our UI/UX Design Application. Our innovative tools empower designers to create stunning user interfaces and seamless user experiences. Elevate your design process and transform concepts into visually captivating digital experiences.';

  return (
    <>
      <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8 text-white rounded-lg shadow-lg mt-24">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-4">
            <h1 className="text-3xl font-bold mb-4">UI/UX Design Application</h1>
            <p className="mb-6">{text}</p>
          </div>
          <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden relative">
              <img
                src={uiuxDesignImage}
                alt="UI/UX Design Application"
                className="w-full h-full object-cover transition-transform duration-1000 transform rotate-12 hover:rotate-0"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <NavLink to='/contact-us' className="bg-white text-purple-500 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition duration-300">
            Try Now
          </NavLink>
        </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default UIUXDesignApplication;
