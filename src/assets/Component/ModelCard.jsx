import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModelCard = ({ model, setCarts }) => {
  const [isBuyNow, setBuyNow] = useState(false);

  const handleBuyNow = () => {
    if (!isBuyNow) {
      setBuyNow(true);

      // Add item to cart
      setCarts?.((prev) => [...prev, model]);

      // Show toast (global toast, only 1 visible at a time)
      toast.success(`${model.name} added to cart!`, {
        toastId: 'global-add-cart', // ✅ single toast for all cards
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const tagColors = {
    Popular: 'bg-amber-100 text-amber-700',
    New: 'bg-green-100 text-green-700',
    'Best Seller': 'bg-purple-100 text-purple-700',
  };

  return (
    <div className="ring-1 ring-gray-200 shadow-sm rounded-2xl px-5 py-6 flex flex-col justify-between h-full bg-white transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Tag */}
      <div className="flex justify-end">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColors[model.tag] || 'bg-gray-100 text-gray-600'}`}>
          {model.tag}
        </span>
      </div>

      {/* Image */}
      <div className="flex justify-center my-3">
        <img className="object-contain w-14 h-14 bg-gray-100 rounded-full p-1" src={model.image} alt={model.name} />
      </div>

      {/* Name & Description */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold pt-3 text-gray-900">{model.name}</h3>
        <p className="text-gray-600 pt-2 text-sm leading-relaxed">{model.description}</p>
      </div>

      {/* Price */}
      <div className="flex justify-center gap-2 py-2 text-center">
        <h2 className="text-xl font-bold text-gray-900">{model.price}</h2>
        <p className="text-gray-500 text-sm self-center">/{model.period}</p>
      </div>

      {/* Features */}
      <div className="text-gray-600 space-y-1 text-sm">
        {model.features.map((feature, idx) => (
          <p key={idx} className="flex gap-2 items-center">
            <Check size={18} className="text-green-500" /> {feature}
          </p>
        ))}
      </div>

      {/* Buy Now Button */}
      <button
        onClick={handleBuyNow}
        className={`btn btn-block rounded-full text-white mt-5 border-none py-2.5 text-sm transition hover:brightness-110 ${isBuyNow ? 'bg-green-500' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'}`}
      >
        {isBuyNow ? 'Added to Cart' : 'Buy Now'}
      </button>

      <ToastContainer />
    </div>
  );
};

export default ModelCard;