import React from "react";

const Landing = () => {
  return (
    <section className="mt-20">
      {/* Hero Page */}
      <div className="flex flex-row justify-center items-center">
        {/* Text CTA */}
        <div className="flex flex-col -mt-10">
          <h1 className="font-fredoka text-[#40916C] text-5xl leading-[3.8rem]">
            echo your journey <br />
            to the world
          </h1>
          <p className="mt-2 font-raleway text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus <br />
            aliquam lorem a neque eu a.
          </p>
          <div className="mt-8 flex">
            <button className="mr-4 font-raleway text-2xl bg-[#3F3D56] text-white py-2 px-12 rounded-3xl my-auto">View posts</button>
            <button className="font-raleway text-2xl bg-[#40916C] text-white py-2 px-12 rounded-3xl my-auto">Get started</button>
          </div>
        </div>
        {/* Image */}
        <img src="./assets/undraw_echo.svg" alt="Image of a globe" className="h-5/6" />
      </div>
      {/* Partners */}
      <div className="mt-28 py-8 bg-[#52B286] flex flex-col items-center">
        <h3 className="font-raleway font-bold text-white">PARTNERED WITH</h3>
        {/* Icons */}
        <div className="mt-2 flex flex-row">
          <img src="./assets/icon-airbnb.png" alt="Airbnb Icon" className="mx-12" />
          <img src="./assets/icon-uber.png" alt="Uber Icon" className="mx-12" />
          <img src="./assets/icon-tripadvisor.png" alt="Tripadvisor Icon" className="mx-12" />
          <img src="./assets/icon-doordash.png" alt="DoorDash Icon" className="mx-12" />
          <img src="./assets/icon-booking.png" alt="Booking Icon" className="mx-12" />
        </div>
      </div>
      {/* Popular Destinations */}
      <div className="mt-28 flex flex-col items-center">
        <h3 className="font-raleway font-bold text-2xl text-[#A5A5A5]">POPULAR DESTINATIONS</h3>
        <h1 className="font-fredoka text-5xl text-[#40916C]">most echoed place</h1>
        <div className="mt-24 grid grid-cols-3 gap-20">
          <img src="./assets/place-newyork.svg" alt="" />
          <img src="./assets/place-toronto.svg" alt="" />
          <img src="./assets/place-chicago.svg" alt="" />
          <img src="./assets/place-beijing.svg" alt="" />
          <img src="./assets/place-doha.svg" alt="" />
          <img src="./assets/place-manila.svg" alt="" />
        </div>
      </div>
      {/* Sub-CTA */}
      <div className="mt-32 flex flex-row justify-center items-center">
        <img src="./assets/undraw_moments.svg" alt="Illustration of a camera with photos" />
        {/* Text */}
        <div className="flex flex-col w-3/12 -mt-12 ml-28 pr-10">
          <h1 className="mb-4 font-fredoka text-5xl text-[#40916C]">consectetur elit</h1>
          <p className="mb-8 font-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit sociis ac, leo suspendisse mi urna interdum. Enim nec habitant mi at tellus vitae nulla.</p>
          <p className="mb-10 font-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus velit et dolor ullamcorper purus. Lectus bibendum ipsum nunc nisl, pellentesque sed augue molestie.</p>
          <button className="w-7/12 font-raleway text-2xl bg-[#3F3D56] text-white py-2 px-4 rounded-3xl my-auto">Create an account</button>
        </div>
      </div>
      {/* Featured Posts */}
      <div className="mt-48 flex flex-col items-center">
        <h3 className="font-raleway font-bold text-2xl text-[#A5A5A5]">FEATURED POSTS</h3>
        <h1 className="font-fredoka text-5xl text-[#40916C]">top echoes</h1>
        <div className="mt-8"></div>
      </div>
    </section>
  );
};

export default Landing;
