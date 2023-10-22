import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-blue-400 p-4">
      <div className="max-w-[1240px] md:flex mx-auto justify-between py-[30px]">
        <div>
          <h1 className="font-bold text-4xl text-white"> My name is fahad </h1>
          <span className="text-white mr-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            quaerat fugiat praesentium
          </span>
        </div>
        <div>
          <input
            type="text"
            className="p-3 rounded text-gray-500"
            placeholder="Enter email"
          />
          <button className="bg-black mt-4 text-white rounded p-3">
            Submit
          </button>
          <br />
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
            fuga.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
