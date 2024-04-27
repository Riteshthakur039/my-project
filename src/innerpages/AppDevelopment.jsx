import React from 'react';
import { Card } from 'react-bootstrap';
import Offer from '../components/Offer';
import banner from '../assets/ecom.png'
import About from './About';
import { NavLink } from 'react-router-dom';

const AppDevelopment = () => {
  
  const text =
    'App development involves the creation of mobile applications for various platforms such as iOS and Android. Developers use languages like React Native and tools like Expo to build cross-platform apps that offer a seamless user experience. Whether it\'s for business, entertainment, or productivity, app development brings ideas to life on the small screen.';

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg mt-24">
        <div className="md:w-1/2 md:pr-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">App Development</h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>
        </div>
        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
          <Card className="animate-pulse">
            <Card.Img variant="top" src={banner} alt="E-commerce solutions" className="w-full h-full object-cover rounded-lg" />
            <Card.Body>
              <Card.Title className='text-white'>Build Your App</Card.Title>
              <Card.Text className='text-white'>Create innovative and engaging mobile applications with our app development services.</Card.Text>
              <NavLink to='/contact-us' variant="primary" className='text-white hover:bg-green-700'>Try Now</NavLink>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default AppDevelopment;
