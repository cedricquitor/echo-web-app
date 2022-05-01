import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  return (
    <div className="bg-[#F0F2F5] flex flex-col justify-between">
      <Navbar />
      <div className="my-20">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
