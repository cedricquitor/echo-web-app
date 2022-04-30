import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full py-12 bg-transparent shadow-lg">
      <div className="flex flex-row justify-between container mx-auto">
        {/* Logo */}
        <div>
          <img src="./assets/echo-full.png" alt="echo Logo" className="h-14" />
        </div>
        {/* Links */}
        <div className="flex flex-row my-auto">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Use-case</a>
          <a href="">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
