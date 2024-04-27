import React from 'react';
import layer1 from '../assets/layer1.png';
import layer2 from '../assets/layer2.png';
import Offer from '../components/Offer';
import About from './About';
import { NavLink } from 'react-router-dom';

const Taxi = () => {
  return (
    <>
    <div className="bg-white min-h-screen flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
      <div className="text-center md:text-left">
        <h2 className='text-lg md:text-xl bg-purple-200 text-purple-700 px-3 py-1 inline-block rounded-full mt-6 md:mt-10'>
          #TAXI BOOKING APP
        </h2>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mt-4 md:mt-6 leading-tight'>
          On-demand Taxi<br/>Booking App
        </h1>
        <h1 className='mt-4 text-sm md:text-base lg:text-lg'>
          Take your business to the next level and boost your revenue with a customized, Uber-like taxi app that carries your brand.
        </h1>
        <div className='mt-6 md:mt-10 space-x-0 md:space-x-4 flex flex-col md:flex-row justify-center md:justify-start'>
          <NavLink to='/calendar' className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg mb-4 md:mb-0'>
            Schedule Demo
          </NavLink>
          <NavLink to='/contact-us' className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg'>
            Explore Solutions
          </NavLink>
        </div>
      </div>
      <div className="mt-6 md:mt-10 md:w-full lg:w-2/5">
        <img src={layer2} alt="banner" className='w-full h-auto hidden md:block' />
      </div>
      <div className="mt-6 mb-6 md:mb-20 md:w-full lg:w-2/5">
        <img src={layer1} alt="banner" className='w-full h-auto mx-auto md:mt-20' />
      </div>
    </div>
    <Offer />
    <About />
    </>
  );
}

export default Taxi;
