import { Check } from 'lucide-react';
import React, { useState } from 'react';

const ModelCard = ({ model, carts, setCarts }) => {
  const [isBuyNow, setBuyNow] = useState(false);

  const handleBuyNow = () => {
    setBuyNow(true);
    // Optional: add to carts if you want
    if (setCarts) {
      setCarts([...carts, model]);
    }
  };

  // Dynamic tag color based on model.tag
  const tagColors = {
    Popular: 'bg-amber-200',
    New: 'bg-green-200',
    'Best Seller': 'bg-purple-200',
  };

  return (
    <div className="ring-1 ring-gray-200 shadow-md rounded-lg px-3 py-6 flex flex-col justify-between h-full">
      {/* Tag */}
      <div className="flex justify-end">
        <span className={`px-3 rounded-full ${tagColors[model.tag] || 'bg-gray-200'}`}>
          {model.tag}
        </span>
      </div>

      {/* Image */}
      <div className="flex justify-center my-3">
        <img
          className="object-contain w-14 h-14 bg-gray-100 rounded-full p-1"
          src={model.image}
          alt={model.name}
        />
      </div>

      {/* Name & Description */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold pt-3">{model.name}</h3>
        <p className="text-gray-600 pt-2">{model.description}</p>
      </div>

      {/* Price */}
      <div className="flex justify-center gap-2 py-2 text-center">
        <h2 className="text-xl font-bold">{model.price}</h2>
        <p className="text-gray-600">/{model.period}</p>
      </div>

      {/* Features */}
      <div className="text-gray-600 space-y-1">
        {model.features.map((feature, idx) => (
          <p key={idx} className="flex gap-2 items-center">
            <Check size={18} className="text-green-500" />
            {feature}
          </p>
        ))}
      </div>

      {/* Buy Now Button */}
      <button
        onClick={handleBuyNow}
        className="btn btn-primary btn-block rounded-full text-white mt-5"
      >
        {isBuyNow ? 'Added to Cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ModelCard;