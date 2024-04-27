import React from 'react';
import img from '../assets/contact.png'; 
import About from '../innerpages/About';

const Contact = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row p-8 bg-gradient-to-r from-blue-400 to-green-500 text-white rounded-lg shadow-lg mt-24">
      {/* Left side - Form */}
      <div className="md:w-1/2 md:pr-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-white rounded"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-white rounded"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border border-white rounded"
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="interest">
              Interested In
            </label>
            <select
              id="interest"
              name="interest"
              className="w-full p-2 text-black border border-white rounded"
            >
              <option value="">Select an option</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="projectDetails">
              Project Details
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows="4"
              className="w-full p-2 border text-black border-white rounded"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      
      <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
        <div className="rounded-lg overflow-hidden animate-float">
          
          <img
            src={img}
            alt="Animated Illustration"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
    <About />
    </>
  );
};

export default Contact;
