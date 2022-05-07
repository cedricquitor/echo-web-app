import React from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

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
        <img src="./assets/undraw_echo.svg" alt="Image of a globe" />
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
        <div className="mt-8 flex flex-row items-center">
          <BsFillArrowLeftCircleFill className="h-[62px] w-[62px] text-[#52B286]" />
          <div className="flex">
            <div className="bg-white mx-8 rounded-2xl">
              <img src="./assets/card-1.svg" alt="Image of Burj Khalifa" />
              <div className="flex mb-2 mx-3 my-2">
                <h1 className="px-3 text-base my-auto font-raleway text-[#DADADA] bg-[#A5A5A5] rounded-2xl cursor-pointer mr-2">burjkhalifa</h1>
                <h1 className="px-3 text-base my-auto font-raleway text-[#DADADA] bg-[#A5A5A5] rounded-2xl cursor-pointer mr-2">dubai</h1>
                <h1 className="px-3 text-base my-auto font-raleway text-[#DADADA] bg-[#A5A5A5] rounded-2xl cursor-pointer">skyscraper</h1>
              </div>
              <div className="flex flex-col pb-6">
                <h1 className="mx-3 font-raleway font-bold text-2xl text-[#40916C]">Burj Khalifa</h1>
                <p className="mt-1 mx-3 font-raleway text-base">
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit. Eu egestas sagittis mattis
                  <br /> consequat.
                </p>
              </div>
            </div>
            <div className="bg-white mx-8 rounded-2xl">
              <img src="./assets/card-2.svg" alt="Image of Santorini" />
              <div className="flex mb-2 mx-3 my-2">
                <h1 className="px-3 text-base my-auto font-raleway text-[#DADADA] bg-[#A5A5A5] rounded-2xl cursor-pointer mr-2">santorini</h1>
                <h1 className="px-3 text-base my-auto font-raleway text-[#DADADA] bg-[#A5A5A5] rounded-2xl cursor-pointer mr-2">greece</h1>
                <h1 className="px-3 text-base my-auto font-raleway text-[#DADADA] bg-[#A5A5A5] rounded-2xl cursor-pointer">city</h1>
              </div>
              <div className="flex flex-col pb-6">
                <h1 className="mx-3 font-raleway font-bold text-2xl text-[#40916C]">Santorini</h1>
                <p className="mt-1 mx-3 font-raleway text-base">
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit. Eu egestas sagittis mattis
                  <br /> consequat.
                </p>
              </div>
            </div>
            <div className="bg-white mx-8 rounded-2xl">
              <img src="./assets/card-3.svg" alt="Image of Louvre" />
              <div className="flex mb-2 mx-3 my-2">
                <h1 className="px-3 text-base my-auto font-raleway text-[#DADADA] bg-[#A5A5A5] rounded-2xl cursor-pointer mr-2">louvre</h1>
                <h1 className="px-3 text-base my-auto font-raleway text-[#DADADA] bg-[#A5A5A5] rounded-2xl cursor-pointer mr-2">france</h1>
                <h1 className="px-3 text-base my-auto font-raleway text-[#DADADA] bg-[#A5A5A5] rounded-2xl cursor-pointer">museum</h1>
              </div>
              <div className="flex flex-col pb-6">
                <h1 className="mx-3 font-raleway font-bold text-2xl text-[#40916C]">Louvre</h1>
                <p className="mt-1 mx-3 font-raleway text-base">
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit. Eu egestas sagittis mattis
                  <br /> consequat.
                </p>
              </div>
            </div>
          </div>
          <BsFillArrowRightCircleFill className="h-[62px] w-[62px] text-[#52B286]" />
        </div>
      </div>
      <div className="py-20 px-40 flex flex-col container mx-auto mt-40 bg-[#3F3D56] rounded-3xl">
        <h1 className="text-white text-center text-5xl font-fredoka">let the world know your adventure</h1>
        <p className="mt-4 font-raleway text-[#DADADA] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus in in enim pellentesque vitae, nec
          <br /> pretium. Est felis, vulputate velit bibendum imperdiet id duis eu. Sociis erat consectetur vestibulum ut
          <br /> aliquam dapibus turpis fringilla. Faucibus aenean ac vestibulum tincidunt mattis aliquet.
        </p>
        <button className="w-4/12 mx-auto mt-8 my-auto font-raleway text-2xl bg-[#40916C] text-white py-3 rounded-3xl">Create an echo account</button>
      </div>
    </section>
  );
};

export default Landing;
