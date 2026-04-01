import React from "react";

const Cart = ({ carts = [], setCarts, onBack }) => {
  const handleRemove = (id) => {
    if (!setCarts) return;
    setCarts((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (!setCarts) return;
    setCarts([]);
  };

  return (
    <section className="max-w-[80%] mx-auto mb-20 mt-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Your Cart</h2>
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-semibold text-[#4F39F6]"
        >
          Back to Home
        </button>
      </div>

      {!carts.length ? (
        <div className="text-center text-gray-500 py-16">Your cart is empty.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4">
            {carts.map((item) => (
              <div key={item.id} className="ring-1 ring-gray-200 rounded-2xl p-5 bg-white flex items-center gap-4">
                <img
                  className="w-14 h-14 rounded-full bg-gray-100 p-2"
                  src={item.image}
                  alt={item.name}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                </div>
                <p className="font-semibold text-gray-900">{item.price}</p>
                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  className="text-sm text-red-500 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="button"
              onClick={handleCheckout}
              className="rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold px-6 py-2.5 text-sm"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;