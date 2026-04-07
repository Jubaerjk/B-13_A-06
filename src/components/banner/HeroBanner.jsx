import React from "react";
import BannerImg from "../../assets/banner.png";
import { FaCircle } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";

const HeroBanner = () => {
  return (
    <div className="hero bg-base-200 lg:h-[60vh] py-10">
      <div className="hero-content flex-col md:flex-row-reverse container mx-auto">
        <img

          src={BannerImg}
          className="max-w-sm rounded-lg shadow-sm max-h-96 block"
          alt="Hero Banner"
        />

        {/* Hero Text */}
        <div>
          <button className="btn btn-sm bg-[#E1E7FF] text-[#9514FA] rounded-full">
            <FaCircle /> New: AI-Powered Tools Available
          </button>
          <h1 className="text-5xl font-extrabold text-[#101727]">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6 text-[#475467] text-[18px]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore Products
          </p>
          <div className="flex gap-4">
            <button className="btn bg-linear-to-r from-[#9514FA] to-[#5210C4] text-white rounded-full">
              Explore Products
            </button>
            <button className="btn btn-outline text-[#9514FA] rounded-full">
              <IoPlayOutline /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

