import React from "react";
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'

const Card = () => {
  return (
    <div className="py-[100px] px-8 bg-[#ee3420] ">
      <div className='ml-48'>
        <h2 className='text-5xl text-white font-bold'>What we do</h2>
        <h4 className='text-3xl text-white font-bold py-3'>We will go the extra mile for you</h4>
      </div>
      <div className="md:grid grid-cols-3 max-w-[1240px] mx-auto gap-10 py-4 ">
        <div className="shadow-2xl h-[400px]  rounded-xl hover:scale-105 duration-500  bg-white">
          
          <div className='m-5'>
             <img src={car3} alt="" />
               <h2 className='text-4xl font-bold text-center'>Car rental</h2>
          <p className='text-2xl font-bold text-gray-700 mt-3'>Enjoy unbeatable prices with on-demand car rental service</p>
          
          </div>
        </div>
        <div className="shadow-2xl h-[400px]  rounded-xl hover:scale-105 duration-500   bg-white">
          <div className='m-5'>
            <img src={car2} alt="" />
               <h2 className='text-4xl font-bold text-center'>Car rental</h2>
          <p className='text-2xl font-bold text-gray-700 mt-3'>Enjoy unbeatable prices with on-demand car rental service</p>
          
          </div>
          
        </div>
        <div className="shadow-2xl h-[400px]  rounded-xl hover:scale-105 duration-500  bg-white">
            <div className='m-5'>
               <img src={car1} alt="" />
               <h2 className='text-4xl font-bold text-center'>Car rental</h2>
          <p className='text-2xl font-bold text-gray-700 mt-3'>Enjoy unbeatable prices with on-demand car rental service</p>
          
          </div>
           
        </div>

      </div>
      <div className="shadow-2xl h-[300px] max-w-[1240px] ml-48 rounded-2xl    bg-white">
            <div className='m-5'>
             
               <h2 className='text-4xl font-bold text-gray-700 mt-3'>We built a better way to travel</h2>
          <p className='text-2xl'>Our various services are designed to make the everyday commute of people hassle free</p>
          
          </div>
         <div>
          <input
            type="text"
            className="p-3 rounded text-gray-500 border-dashed border-s-orange-400 flex-1"
            placeholder="Enter email"
          />
          <button className="bg-black mt-4 text-white rounded p-3">
            Submit
          </button>
          <br />
         
        </div>
        </div>
    </div>
  );
};

export default Card;
