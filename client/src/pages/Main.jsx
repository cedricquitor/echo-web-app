import React from "react";

const Main = () => {
  return (
    <div className="mt-20 flex justify-center items-center">
      <div className="p-8 bg-white rounded-2xl">
        {/* User */}
        <div className="flex">
          <h1>Image</h1>
          <h1>Name</h1>
        </div>
        <div>
          <h1>Tell us about your adventure, John!</h1>
          {/* Text Area */}
        </div>
        <div className="flex">
          <h1>Image Icon</h1>
          <h1>Tags</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
