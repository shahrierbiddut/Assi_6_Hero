import React from "react";
import bannerImg from "../../../assets/banner/banner.png";
import badgeImg from "../../../assets/banner/Group 5.png";
import btnPlayImg from "../../../assets/banner/Play.png";

const Banner = () => {
  return (
    <div className="max-w-[80%] mx-auto mt-10 md:mt-16 md:flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center">
        <div>

          {/* Badge */}
          <div className="flex items-center gap-2 text-blue-900 font-semibold px-5 py-2 bg-blue-100 rounded-full w-fit">
            <img src={badgeImg} alt="badge" className="w-5 h-5" />
            <span>New: AI-Powered Tools Available</span>
          </div>

          {/* Heading */}
          <h1 className="font-extrabold text-4xl lg:text-6xl pt-6 pb-4">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 max-w-md">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 py-6">
            <button className="btn text-lg rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
              Explore Products
            </button>

            <button className="btn rounded-full btn-outline btn-primary flex items-center gap-2">
              <img src={btnPlayImg} alt="play" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="mt-6 md:mt-0">
        <img
          src={bannerImg}
          alt="banner"
          className="max-h-[500px] w-auto"
        />
      </div>
    </div>
  );
};

export default Banner;