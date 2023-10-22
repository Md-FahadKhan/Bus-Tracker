import React from "react";
import image from "../assets/coder.gif";
const Expert = () => {
  return (
    <div className="max-w-[1240px] my-10 mx-auto p-2 md:grid grid-cols-3">
      <div className=" col-span-1 md:w-[80%] text-center ">
        <img src={image} alt="" className="inline" />
      </div>
      <div className=" col-span-2 m-2 flex flex-col justify-center">
        <h2 className="text-green-400 font-bold my-2 text-2xl">
          I am a Full-stack Developer
        </h2>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed magni
          enim doloribus! Modi laboriosam maiores quam, voluptas commodi saepe
          sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          enim!
        </p>
        <button className="bg-black w-[30%] mt-2 text-white rounded p-3">
          {" "}
          Get Starded
        </button>
      </div>
    </div>
  );
};

export default Expert;
