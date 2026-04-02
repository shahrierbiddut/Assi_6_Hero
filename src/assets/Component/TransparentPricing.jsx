import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    features: [
      "Access to free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    bgClass: "bg-gray-100 text-gray-900",
    buttonClass: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white",
    tag: null,
  },
  {
    name: "Pro",
    description: "Best for professionals",
    price: "$29",
    period: "/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    bgClass: "bg-gradient-to-r from-purple-500 to-indigo-600 text-white",
    buttonClass: "bg-white text-purple-600",
    tag: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For teams and businesses",
    price: "$99",
    period: "/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    bgClass: "bg-gray-100 text-gray-900",
    buttonClass: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white",
    tag: null,
  },
];

const Pricing = () => {
  return (
    <div className="py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold inline-block px-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 pt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-6 shadow-lg relative ${plan.bgClass}`}
          >
            {plan.tag && (
              <span className="font-semibold absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                {plan.tag}
              </span>
            )}

            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p
              className={`text-sm mb-4 ${plan.bgClass.includes("text-white") ? "opacity-80" : "text-gray-500"}`}
            >
              {plan.description}
            </p>

            <h1 className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-base font-normal">{plan.period}</span>
            </h1>

            <ul
              className={`space-y-2 mb-6 ${plan.bgClass.includes("text-white") ? "text-gray-100" : "text-gray-600"}`}
            >
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check
                    size={18}
                    className={
                      plan.bgClass.includes("text-white")
                        ? "text-gray-100"
                        : "text-green-500"
                    }
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2.5 rounded-full font-semibold text-sm ${plan.buttonClass}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;