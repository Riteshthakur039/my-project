import React from 'react';
import travelImage from '../assets/travel-tourism.png'; 
import Offer from '../components/Offer';
import About from './About';
import { NavLink } from 'react-router-dom';

const TravelTourism = () => {
  const text =
    'Embark on unforgettable journeys with our Travel and Tourism services. Explore new destinations, discover diverse cultures, and create lasting memories. Let us be your guide to exciting adventures around the world.';

  return (
    <>
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 text-white rounded-lg shadow-lg mt-24">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-4">
            <h1 className="text-3xl font-bold mb-4">Travel and Tourism</h1>
            <p className="mb-6">{text}</p>
          </div>
          <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden relative">
              <img
                src={travelImage}
                alt="Travel and Tourism"
                className="w-full h-full object-cover transition-transform duration-1000 transform scale-105 hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <NavLink to='/contact-us' className="bg-white text-yellow-500 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300">
            Explore Solutions
          </NavLink>
        </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default TravelTourism;
