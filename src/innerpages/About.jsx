import React from 'react';
import { CiCloudOn } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
import about from '../assets/about.png';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1 className='text-xl md:text-2xl text-red-700 flex items-center justify-center mt-32'>About us</h1>

      <div className="flex flex-col md:flex-row items-center justify-center bg-white p-4 md:p-8">
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <img
            src={about}
            alt="Illustration of two people sitting on chairs, surrounded by chat bubbles and geometric shapes"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Cultivating Business Success with Programming Glore Software
          </h1>
          <div className="flex flex-col space-y-4 mb-8">
            <div className="flex items-start space-y-2">
              <div className="bg-blue-500 rounded-full p-2">
                <SlBadge className="w-4 h-4 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-grow">
                <h2 className="text-sm md:text-xl font-semibold text-gray-700">
                  Experience Navigation Redefined
                </h2>
                <p className="text-gray-500 text-xs md:text-sm">
                  The Programming Glore App isn’t just another navigation tool; it’s a
                  personalized journey planner. Using advanced algorithms and
                  cutting-edge technology, we create customized walking routes
                  aligned with your individual interests, preferences, and time
                  constraints.
                </p>
              </div>
            </div>
            <div className="flex items-start space-y-2">
              <div className="bg-purple-500 rounded-full p-2">
                <CiCloudOn className="w-4 h-4 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-grow">
                <h2 className="text-sm md:text-xl font-semibold text-gray-700">
                  Empowering Your Business with Technology
                </h2>
                <p className="text-gray-500 text-xs md:text-sm">
                  Our mission at Programming Glore lies in revolves around harnessing the
                  latest technology and industry best practices to develop scalable
                  and efficient software solutions. We’re committed to keeping you
                  abreast of an ever-increasing technological advancements
                  facilitating digital transformation, and offering guidance aiding
                  relevance in today’s dynamic business landscape.
                </p>
              </div>
            </div>
          </div>
          <NavLink to='/contact-us' className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
            Schedule Demo
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default About;
