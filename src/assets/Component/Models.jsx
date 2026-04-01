import React from "react";

const Models = ({ models = [] }) => {

  return (
    <div className="max-w-[80%] mx-auto mb-20">

      {/* Header */}
      <div className="text-center pb-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Premium Digital Tools
        </h2>
        <p className="text-gray-700 pt-3">
          Choose from our curated collection of premium digital products <br />
          designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {models.map((model, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >

            <img
              className="w-14 h-14 bg-gray-100 rounded-full p-2 mb-4"
              src={model.image}
              alt={model.name}
            />

            <h3 className="text-2xl font-semibold">
              {model.name}
            </h3>

            <p className="text-gray-600 mb-3">
              {model.description}
            </p>

            <div className="flex items-center gap-1 mb-4">
              <h2 className="text-xl font-bold">{model.price}</h2>
              <p className="text-gray-600">/{model.period}</p>
            </div>

            <div className="space-y-2 mb-4">
              {model.features?.map((feature, i) => (
                <p key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  {feature}
                </p>
              ))}
            </div>

            <button className="btn w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">
              {model.btnType || "Get Started"}
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Models;