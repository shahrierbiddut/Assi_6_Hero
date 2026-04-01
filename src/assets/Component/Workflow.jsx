import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] md:px-20 px-8 py-16'>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold md:text-4xl text-2xl text-center text-white mb-2'>Ready to Transform Your Workflow?</h1>
            <p className='text-gray-300 max-w-150 text-center'>Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>
            <div className='flex gap-4 py-6'>
                <button className="btn btn-outline text-xl rounded-full bg-white text-blue-600 font-semibold ">Explore Products</button>
                <button className="btn rounded-full btn-neutral btn-outline text-white">
                    View Pricing</button>
            </div>
            <p className='text-gray-300 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
        </div>
    );
};

export default Workflow;