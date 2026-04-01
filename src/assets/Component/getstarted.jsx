import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const GetStarted = ({ modelPromise }) => {

  const [models, setModels] = useState([]);

  useEffect(() => {
    modelPromise.then(data => setModels(data));
  }, [modelPromise]);

  return (
    <div className="max-w-[80%] mx-auto mb-20">

      <div className="text-center pb-10">
        <h2 className="font-bold md:text-5xl text-4xl">
          Premium Digital Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {models.map((model, index) => (
          <div key={index} className="shadow-lg rounded-lg p-6">

            <img
              className="w-14 h-14 bg-gray-100 rounded-full p-1 mb-3"
              src={model.image}
              alt=""
            />

            <h3 className="text-2xl font-semibold">{model.name}</h3>
            <p className="text-gray-600">{model.description}</p>

            <div className="flex mb-2">
              <h2 className="text-xl font-bold">{model.price}</h2>
              <p className="text-gray-600">/{model.period}</p>
            </div>

            <div className="space-y-2 mb-3">
              {model.features?.map((f, i) => (
                <p key={i} className="flex gap-2 items-center">
                  <Check size={18} className="text-green-500" />
                  {f}
                </p>
              ))}
            </div>

            <button className="btn w-full bg-purple-600 text-white rounded-full">
              {model.btnType || "Get Started"}
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default GetStarted;