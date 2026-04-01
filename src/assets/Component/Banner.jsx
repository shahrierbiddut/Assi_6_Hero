import React from 'react';
import bannerImg from '../../../assets/banner/banner.png'
import badgeImg from '../../../assets/banner/Group 5.png'
import btnPlayImg from '../../../assets/banner/Play.png'

const Banner = () => {
    return (
        <section className='md:flex items-center justify-between max-w-[80%] mx-auto md:mt-16 mt-10 gap-10'>
            <div className='flex items-center md:max-w-[52%]'>
                <div>
                    <div className='inline-flex items-center gap-2 text-blue-900 font-semibold px-5 py-2 bg-blue-100 rounded-full'>
                        <img src={badgeImg} alt="" />
                        <span>New: AI-Powered Tools Available</span>
                    </div>

                    <h1 className='font-extrabold lg:text-6xl text-4xl pb-4 pt-6 leading-tight'>
                        Supercharge Your <br /> Digital Workflow
                    </h1>
                    <p className='text-gray-500 max-w-xl'>
                        Access premium AI tools, design assets, templates, and productivity
                        software all in one place. Start creating faster today.
                    </p>
                    <div className='flex flex-wrap gap-4 py-6'>
                        <button className="rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 py-2.5 text-base">
                            Explore Products
                        </button>
                        <button className="inline-flex items-center rounded-full border-2 border-[#6D3BF7] text-[#4F39F6] bg-white px-6 py-2.5 text-base gap-2">
                            <img className="w-5 h-5" src={btnPlayImg} alt="" />
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center md:justify-end'>
                <img className='max-h-[420px] w-auto' src={bannerImg} alt="" />
            </div>
        </section>
    );
};

export default Banner;