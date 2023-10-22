
import Typed from "react-typed";
import bus from '../assets/bus.png'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Home = () => {
  return (
     <Swiper
         spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-gradient-to-b from-[#534a4a] to-[#d4bebe] w-full py-[180px] text-center  text-white flex">
      <div className="max-w-[1240px] mt-[100px] mx-auto">
        <div className=" text-4xl duration-500 md:text-5xl mb-4">
        Empowering Bangladesh 
        </div>
        <h1 className="text-5xl duration-500 md:text-[80px] font-bold mb-4">
          to travel better!
        </h1>
        <h2 className=" text-4xl duration-500 md:text-5xl font-bold">
          Learn{" "}
          <Typed
            className="pl-3 "
            strings={["Web Devolopment", "Frelancer", "Fullstack Devloper"]}
            typeSpeed={100}
            backSpeed={50}
            
          />
        </h2>
         <button className="bg-black mt-4 text-white rounded p-3 hover:bg-green-600">
          {" "}
          Get Starded
        </button>
      </div>
      <div className=' '><img src={bus} alt="" className='w-[600px] h-[400px] pr-10 fadeIn'/>
      </div>
    </div>
    </SwiperSlide>
        <SwiperSlide><div className="bg-gradient-to-b from-[#ebc7c7] to-[#352929] w-full py-[180px] text-center  text-white flex z-0">
      <div className="max-w-[1240px] mt-[100px] mx-auto">
        <div className=" text-4xl duration-500 md:text-5xl mb-4">
        Empowering Bangladesh 
        </div>
        <h1 className="text-5xl duration-500 md:text-[80px] font-bold mb-4 text-red-600">
          to travel better!
        </h1>
        <h2 className=" text-4xl duration-500 md:text-5xl font-bold">
          Learn{" "}
          <Typed
            className="pl-3 "
            strings={["Web Devolopment", "Frelancer", "Fullstack Devloper"]}
            typeSpeed={100}
            backSpeed={50}
           
          />
        </h2>
        <button className="bg-black mt-4 text-white rounded p-3 hover:bg-green-600">
          {" "}
          Get Starded
        </button>
      </div>
      <div><img src={bus} alt="" className='w-[600px] h-[400px] pr-10 fadeIn' />
      </div>
    </div></SwiperSlide>
        <SwiperSlide> <div className="bg-gradient-to-b from-[#4476ff] to-[#d4bebe] w-full py-[180px] text-center  text-white flex z-0">
      <div className="max-w-[1240px] mt-[100px] mx-auto">
        <div className=" text-4xl duration-500 md:text-5xl mb-4">
        Empowering Bangladesh 
        </div>
        <h1 className="text-5xl duration-500 md:text-[80px] font-bold mb-4">
          to travel better!
        </h1>
        <h2 className=" text-4xl duration-500 md:text-5xl font-bold">
          Learn{" "}
          <Typed
            className="pl-3 "
            strings={["Web Devolopment", "Frelancer", "Fullstack Devloper"]}
            typeSpeed={100}
            backSpeed={50}
          
          />
        </h2>
         <button className="bg-black mt-4 text-white rounded p-3 hover:bg-green-600">
          {" "}
          Get Starded
        </button>
      </div>
      <div><img src={bus} alt="" className='w-[600px] h-[400px] pr-10 fadeIn' />
      </div>
    </div></SwiperSlide>
        
      </Swiper>
    
  );
};

export default Home;
