import React from "react";

const Landing = () => {
  return (
    <section className="mt-20 container mx-auto">
      {/* items-center */}
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
        <div>
          <img src="./assets/undraw_echo.svg" alt="Image of a globe" className="h-5/6" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
