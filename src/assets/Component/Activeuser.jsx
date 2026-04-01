import React from "react";

const ActiveUser = () => {
  return (
    <section className="my-16 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-14">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center">
          <h2 className="font-bold sm:text-5xl text-4xl text-white">50K+</h2>
          <p className="text-gray-200">Active Users</p>
        </div>

        <div className="hidden md:block w-0.5 h-16 bg-gray-300 opacity-50"></div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold sm:text-5xl text-4xl text-white">200+</h2>
          <p className="text-gray-200">Premium Tools</p>
        </div>

        <div className="hidden md:block w-0.5 h-16 bg-gray-300 opacity-50"></div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold sm:text-5xl text-4xl text-white">4.9</h2>
          <p className="text-gray-200">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default ActiveUser;