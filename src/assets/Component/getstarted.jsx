import React from 'react';
import userIcon from '../../../assets/banner/user.png';
import packageIcon from '../../../assets/banner/package.png';
import rocketIcon from '../../../assets/banner/rocket.png';

const steps = [
  {
    id: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: userIcon,
  },
  {
    id: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: packageIcon,
  },
  {
    id: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: rocketIcon,
  },
];

const GetStarted = () => {
  return (
    <div>
      <h2 className="font-semibold md:text-5xl text-4xl text-center">
        Get Started in 3 Steps
      </h2>
      <p className="text-gray-600 text-center pt-3 pb-10">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="max-w-[80%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-20">
        {steps.map((step) => (
          <div
            key={step.id}
            className="ring-1 ring-gray-100 shadow-2xl rounded-lg flex flex-col text-center p-4"
          >
            <button className="flex justify-end">
              <span className="bg-[#9514FA] rounded-full py-1 px-2 flex justify-center text-white font-semibold">
                {step.id}
              </span>
            </button>

            <button className="flex items-center justify-center my-4">
              <img
                className="max-w-14 px-3 py-3 rounded-full bg-[#a85ee53e]"
                src={step.icon}
                alt={step.title}
              />
            </button>

            <h3 className="font-semibold text-3xl py-4">{step.title}</h3>
            <p className="text-gray-600 pb-10">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;