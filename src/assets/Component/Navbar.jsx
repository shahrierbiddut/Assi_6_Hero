import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-[80%] mx-auto flex items-center justify-between py-3">

        {/* Left - Logo */}
        <div>
          <a className="text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>

        {/* Center - Menu */}
        <nav className="hidden lg:flex gap-6 text-gray-700 font-semibold">
          <a href="#" className="hover:text-[#4f39f6]">Products</a>
          <a href="#" className="hover:text-[#4f39f6]">Features</a>
          <a href="#" className="hover:text-[#4f39f6]">Pricing</a>
          <a href="#" className="hover:text-[#4f39f6]">Testimonials</a>
          <a href="#" className="hover:text-[#4f39f6]">FAQ</a>
        </nav>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center gap-2 text-gray-600 hover:text-[#4f39f6]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9h15l-2-9M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            Cart
          </button>

          <a href="#" className="text-gray-700 font-medium hover:text-[#4f39f6]">Login</a>

          <a href="#" className="px-4 py-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">
            Get Started
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;