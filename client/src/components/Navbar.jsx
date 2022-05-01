import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full py-12 bg-transparent">
      <div className="flex flex-row justify-between container mx-auto">
        {/* Logo */}
        <div>
          <img src="./assets/echo-full.png" alt="echo Logo" className="h-14" />
        </div>
        {/* Links */}
        <div className="flex flex-row font-raleway text-2xl text-[#727272]">
          <a href="#" className="mr-8 my-auto">
            Home
          </a>
          <a href="#" className="mr-8 my-auto">
            About
          </a>
          <a href="#" className="mr-8 my-auto">
            Use-case
          </a>
          <a href="#" className="bg-[#40916C] text-white py-2 px-12 rounded-3xl my-auto">
            App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
