import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="p-4 bg-[#28282B]">
      <div className="max-w-[1340px]  items-center py-[15px] mx-auto flex justify-between text-white">
        <div className="text-4xl font-bold text-[crimson]">Fahad</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-4xl items-center md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-4xl items-center md:hidden block"
          />
        )}

        <ul className=" hidden md:flex gap-7 text-2xl font-bold uppercase text-gray-300 ml-48">
          <li className="hover hover:text-[crimson] hover:scale-105 cursor-pointer">
            Home
          </li>
          <li className="hover hover:text-[crimson] hover:scale-105 cursor-pointer">
            About Us
          </li>
          <li className="hover hover:text-[crimson] hover:scale-105 cursor-pointer">
            Career
          </li>
          <li className="hover hover:text-[crimson] hover:scale-105 cursor-pointer">
            Blog
          </li>
          <li className="hover hover:text-[crimson] hover:scale-105 cursor-pointer">
            Contact Us
          </li>
        </ul>
        <div className="font-bold flex gap-8">
          <button className="bg-red-500 px-4 py-2 rounded-2xl">
            Rental bus
          </button>
          <button className="bg-red-500 px-4 py-2 rounded-2xl">ticket</button>
        </div>
        {/* for responsive desing */}
        <ul
          className={`duration-500 md:hidden w-full h-screen text-2xl font-bold uppercase fixed bg-black item-center justify-center
        
        ${toggle ? "left-[0]" : "left-[-100%]"}
        
        top-[102px]`}>
          <div className="items-center justify-center ml-[50%] absolute bottom-10 z-30">
            <li className="p-5">Home</li>
            <li className="p-5">About Us</li>
            <li className="p-5">Career</li>
            <li className="p-5">Blog</li>
            <li className="p-5">Contact Us</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
