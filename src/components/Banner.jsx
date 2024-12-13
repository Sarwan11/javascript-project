import React from "react";
// import { Typed } from "react-typed";
const Banner = () => {
  return (
    <div className="bg-[#2699fb] py-[100px] w-full ">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="font-bold  text-xl md:text-[30px] md:p-[24px]">
          Learn with us
        </h2>
        <h1 className="font-bold text-[50px] text-white md:p-[24px]">
          Grow with us
        </h1>
        <p className="font-bold text-xl md:text-3xl text-white md:p-[24px]">
          Learn
          {/* <Typed
            strings={["web developement", "digital marketing"]}
            typeSpeed={100}
          /> */}
        </p>
      </div>
    </div>
  );
};

export default Banner;
