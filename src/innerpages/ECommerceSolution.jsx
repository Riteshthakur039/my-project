import React from 'react';
import { Card } from 'react-bootstrap';
import Offer from '../components/Offer';
import banner from '../assets/ecom.png'
import About from './About';
import { NavLink } from 'react-router-dom';

const ECommerceSolution = () => {

  
  const text =
    'E-commerce solutions encompass a range of technologies and practices that facilitate online buying and selling. From user-friendly interfaces to secure payment gateways, e-commerce websites streamline the entire shopping experience. Web designers and developers use tools like React and Tailwind CSS to create visually appealing and responsive online stores.';

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg mt-24">
        <div className="md:w-1/2 md:pr-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">E-Commerce Solutions</h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>
        </div>
        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
          <Card className="animate-pulse">
            <Card.Img variant="top" src={banner} alt="E-commerce solutions" className="w-full h-full object-cover rounded-lg" />
            <Card.Body>
              <Card.Title className='text-white'>Explore E-Commerce</Card.Title>
              <Card.Text className='text-white'>Discover a world of possibilities with our e-commerce solutions.</Card.Text>
              <NavLink to='/contact-us' variant="primary" className='text-white'>Try Now</NavLink>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Offer />
      <About />
    </>
  );
};

export default ECommerceSolution;
