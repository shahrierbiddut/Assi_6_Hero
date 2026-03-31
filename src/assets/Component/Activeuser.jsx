import React from "react";

const ActiveUser = () => {
  return (
    <div className="my-16 py-16 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
      
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Active Users */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">50K+</h2>
          <p className="text-gray-300">Active Users</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[2px] h-16 bg-gray-300 opacity-50"></div>

        {/* Premium Tools */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">200+</h2>
          <p className="text-gray-300">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[2px] h-16 bg-gray-300 opacity-50"></div>

        {/* Rating */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">4.9</h2>
          <p className="text-gray-300">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default ActiveUser;