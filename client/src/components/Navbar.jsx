import React, { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY >= 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Scroll Event Listener
  window.addEventListener("scroll", scrollEvent);

  return (
    <div className={isScrolled ? "fixed top-0 w-full py-4 bg-white shadow-xl transition duration-500" : "fixed top-0 w-full py-12 bg-transparent transition duration-500"}>
      <div className="flex flex-row justify-between container mx-auto">
        {/* Logo */}
        <div>
          <img src={isScrolled ? "./assets/echo-mini.png" : "./assets/echo-full.png"} alt="echo Logo" className={isScrolled ? "h-10" : "h-14"} />
        </div>
        {/* Links */}
        <div className={isScrolled ? "flex flex-row font-raleway text-lg text-[#727272]" : "flex flex-row font-raleway text-2xl text-[#727272]"}>
          <a href="#" className="mr-8 my-auto">
            Home
          </a>
          <a href="#" className="mr-8 my-auto">
            About
          </a>
          <a href="#" className="mr-8 my-auto">
            Use-case
          </a>
          <a href="#" className={isScrolled ? "bg-[#40916C] text-white py-1 px-8 rounded-3xl my-auto" : "bg-[#40916C] text-white py-2 px-12 rounded-3xl my-auto"}>
            App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
