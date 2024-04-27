import React, { useRef, useState } from 'react';
import logo from '../assets/logo3.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
// import required modules
import { Autoplay} from 'swiper/modules';

const Swiperlogo = () => {
  return (
    <div className="w-full">
      <Swiper
       spaceBetween={8}
       slidesPerView={3}
        centeredSlides={true}
        loop={true}
        speed={7600}
        autoplay={{
          delay: 600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper bg-gray-300 p-2 rounded-md"
      >
        <SwiperSlide className="bg-blue-500 p-8 rounded-md w-10 mx-10">
          <a href="" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} class="h-4 md:h-8 z-50" alt="Flowbite Logo" />
            </a>
            </SwiperSlide>
        <SwiperSlide className="bg-green-500 p-8 rounded-md w-10 mx-10">
        <a href="" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} class="h-4 md:h-8 z-50" alt="Flowbite Logo" />
            </a>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-500 p-8 rounded-md w-10 mx-10">
        <a href="" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} class="h-4 md:h-8 z-50" alt="Flowbite Logo" />
            </a>
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 p-8 rounded-md w-10 mx-10">
        <a href="" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} class="h-4 md:h-8 z-50" alt="Flowbite Logo" />
            </a>
        </SwiperSlide>
        <SwiperSlide className="bg-purple-500 p-8 rounded-md w-10 mx-10">
          <a href="" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} class="h-4 md:h-8 z-50" alt="Flowbite Logo" />
            </a>
            </SwiperSlide>
        <SwiperSlide className="bg-indigo-500 p-8 rounded-md w-10 mx-10">
        <a href="" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} class="h-4 md:h-8 z-50" alt="Flowbite Logo" />
            </a>
        </SwiperSlide>
        <SwiperSlide className="bg-pink-500 p-8 rounded-md w-10 mx-10">
          <a href="" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} class="h-4 md:h-8 z-50" alt="Flowbite Logo" />
            </a></SwiperSlide>
        <SwiperSlide className="bg-gray-500 p-8 rounded-md w-10 mx-10">
        <a href="" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} class="h-4 md:h-8 z-50" alt="Flowbite Logo" />
            </a>
        </SwiperSlide>
        <SwiperSlide className="bg-blue-400 p-8 rounded-md w-10 mx-10">
        <a href="" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} class="h-4 md:h-8 z-50" alt="Flowbite Logo" />
            </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiperlogo;
