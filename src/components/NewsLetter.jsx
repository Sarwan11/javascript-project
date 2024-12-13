import React from "react";

const NewsLetter = () => {
  return (
    <div className=" bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto  md:flex justify-between py-[50px] ">
        <div className=" text-center ">
          <h1 className=" text-3xl font-bold">
            Want to learn latest IT skills?
          </h1>
          <span className="mt-5">
            Sign upto our newsletter and stay upto date.
          </span>
        </div>
        <div className=" border border-blue-500">
          <input type="text" className="p-3 mx-2 w-80 " placeholder="email" />
          <button className="bg-black p-2 rounded-lg text-white my-2 text-xl">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
