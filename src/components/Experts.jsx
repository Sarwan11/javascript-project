import React from "react";
import photo from "../assets/dribble2.jpg";
const Experts = () => {
  return (
    <div className=" max-w-[1240px] mx-auto md:grid grid-cols-2 my-10 p-2">
      <div className=" col-span-1 md:w-[90%]">
        <img src={photo} alt="we" width={600} />
      </div>
      <div className="  col-span-1 flex flex-col justify-center">
        <h1 className="my-2 text-green-400 font-bold text-3xl">
          Learn from experts
        </h1>
        <p className="my-2 font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          cumque eos, neque velit doloremque fugiat ex alias unde hic voluptatem
          consectetur praesentium soluta quod quo, minima quisquam ipsum et
          dolorem at quibusdam laboriosam obcaecati ea repudiandae quidem. Eos,
          sit?
        </p>
        <button className="bg-black p-2 rounded-lg text-white w-[30%] my-2 text-xl">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Experts;
