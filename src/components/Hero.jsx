import React from 'react';
import banner from '../assets/banner.png';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 min-h-screen flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-10">
      <div className="text-center md:text-left">
        <h2 className='text-lg md:text-xl bg-purple-200 text-purple-700 px-3 py-1 inline-block rounded-full mt-10 mb-4 md:mb-0'>
          #BUSINESS SOLUTIONS FOR YOU
        </h2>
        <h1 className='text-2xl md:text-5xl font-bold mt-6 md:mt-10 leading-tight'>
          Streamline, Scale, Succeed:<br/>Software Solutions for Modern Business
        </h1>
        <div className='mt-6 md:mt-10 space-x-0 md:space-x-4 flex flex-col md:flex-row justify-center md:justify-start'>
          <NavLink to='/calendar' className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg mb-4 md:mb-0'>
            Schedule Demo
          </NavLink>
          <NavLink to='/contact-us' className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg'>
            Explore Solutions
          </NavLink>
        </div>
        <div>
          <h1 className='text-2xl md:text-5xl font-bold mt-6 md:mt-96'>Our Trending Apps:</h1>
          
        </div>
      </div>
      <div className="mt-6 md:mt-40">
        <img src={banner} alt="banner" className='w-full md:w-auto md:h-full' />
      </div>
    </div>
  );
};

export default Hero;