import React from "react";
import { RiFacebookCircleLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="mt-20">
      <div className=" bg-[#52B286] pb-20">
        <div className="flex container mx-auto justify-between">
          {/* Left Side */}
          <div className="flex flex-col mt-12">
            <h1 className="mb-6 font-fredoka text-5xl text-white">echo</h1>
            <p className="font-raleway text-white">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Ut sodales commodo interdum
              <br /> id. Fermentum lorem euismod quam congue
              <br /> bibendum.
            </p>
          </div>
          {/* Right Side */}
          <div className="flex mt-12">
            <div className="flex flex-col mr-16">
              <h2 className="mb-4 font-raleway font-medium text-white text-2xl">About</h2>
              <p className="mb-3 font-raleway text-base text-white">About Us</p>
              <p className="mb-3 font-raleway text-base text-white">Features</p>
              <p className="font-raleway text-base text-white">Use-case</p>
            </div>
            <div className="flex flex-col mr-16">
              <h2 className="mb-4 font-raleway font-medium text-white text-2xl">Company</h2>
              <p className="mb-3 font-raleway text-base text-white">Partnerships</p>
              <p className="mb-3 font-raleway text-base text-white">FAQ</p>
              <p className="font-raleway text-base text-white">Blog</p>
            </div>
            <div className="flex flex-col">
              <h2 className="mb-4 font-raleway font-medium text-white text-2xl">Support</h2>
              <p className="mb-3 font-raleway text-base text-white">Account</p>
              <p className="mb-3 font-raleway text-base text-white">Support Center</p>
              <p className="mb-3 font-raleway text-base text-white">Feedback</p>
              <p className="font-raleway text-base text-white">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#40916C] py-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-raleway font-bold text-base text-white">© 2022 echo - A Social Media Company. All Rights Reserved.</h1>
          <div className="flex gap-2">
            <RiFacebookCircleLine className="h-6 w-6 text-white" />
            <RiTwitterLine className="h-6 w-6 text-white" />
            <RiInstagramLine className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
