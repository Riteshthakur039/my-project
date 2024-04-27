import React from 'react'
import Offer from '../components/Offer'
import About from './About'


const imageUrl = 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

const text = 'Web design and development are the processes of creating and maintaining websites. Web design involves the visual aspects of a website, such as layout, colors, fonts, images, and animations. Web development involves the technical aspects of a website, such as functionality, interactivity, performance, and security. Web designers and developers use various tools and languages, such as HTML, CSS, JavaScript, React, and Tailwind CSS, to create responsive and user-friendly websites.'

const WebDesignComponent = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg mt-24">
      <div className="md:w-1/2 md:pr-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Web Design & Development</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>
      </div>
      <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
        <img src={imageUrl} alt="Web design" className="w-full h-full object-cover rounded-lg"/>
      </div>
     
    </div>
     <Offer />
     <About />
     </>
  )
}

export default WebDesignComponent
