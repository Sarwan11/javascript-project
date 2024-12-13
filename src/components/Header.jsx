import React from "react";
// import GoHomeFill from "<react-icons/go";
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between p-[10px]">
        <div className="text-3xl font-bold">WsCube Tech</div>
        {toggle ? (
          <MdCancel
            onClick={() => setToggle(!toggle)}
            className="md:hidden block "
          />
        ) : (
          <IoMdMenu
            onClick={() => setToggle(!toggle)}
            className="md:hidden block "
          />
        )}

        <ul className=" hidden md:flex gap-9 ">
          <li>Home</li>
          <li>Content</li>
          <li>About</li>
          <li>Resource</li>
          <li>Login</li>
        </ul>
        {/* responsive li */}
        <ul
          className={`md:hidden  fixed duration-200 top-[62px] bg-black w-full text-white ${
            toggle ? "left-[0]" : "left-[-100%]"
          }`}>
          <li className=" p-3">Home</li>
          <li className=" p-3">Content</li>
          <li className=" p-3">About</li>
          <li className=" p-3">Resource</li>
          <li className=" p-3">Login</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
