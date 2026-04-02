import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = ({ carts = [], onCartClick, onLogoClick }) => {
  const cartCount = carts.length;
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-[80%] mx-auto flex items-center justify-between py-3">

        {/* Left-Logo */}
        <div>
          <button
            type="button"
            onClick={onLogoClick}
            className="text-xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
          >
            DigiTools
          </button>
        </div>

        {/* Center - Menu */}
        <nav className="hidden lg:flex gap-6 text-gray-600 text-sm font-medium">
          <a href="#" className="hover:text-[#4f39f6]">Products</a>
          <a href="#" className="hover:text-[#4f39f6]">Features</a>
          <a href="#" className="hover:text-[#4f39f6]">Pricing</a>
          <a href="#" className="hover:text-[#4f39f6]">Testimonials</a>
          <a href="#" className="hover:text-[#4f39f6]">FAQ</a>
        </nav>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onCartClick}
            className="relative inline-flex items-center justify-center text-gray-600 hover:text-[#4f39f6]"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-gray-100 text-gray-700 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>

          <a href="#" className="text-gray-700 text-sm font-medium hover:text-[#4f39f6]">
            Login
          </a>

          <a
            href="#"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-xs"
          >
            Get Started
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;