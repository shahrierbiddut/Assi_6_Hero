import React from 'react';
import bannerImg from '../../../assets/banner/banner.png'
import badgeImg from '../../../assets/banner/Group 5.png'
import btnPlayImg from '../../../assets/banner/Play.png'

const Banner = () => {
    return (
        <div className='md:flex justify-between max-w-[80%] mx-auto md:mt-16 mt-10'>
            <div className='flex items-center'>
                <div>
                <div className='flex items-center justify-center gap-2 text-blue-900 font-semibold px-5 py-2 bg-blue-100 rounded-full max-w-76'>
                    <img src={badgeImg} alt="" />
                    <button>New: AI-Powered Tools Available</button>
                </div>
                
                <h1 className='font-extrabold lg:text-6xl text-4xl pb-4 pt-6'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='max-w- text-gray-500'>Access premium AI tools, design assets, templates, and productivity <br />
                software—all in one place. Start creating faster today. <br />
                Explore Products
                </p>
                <div className='flex gap-4 py-6'>
                    <button className="btn text-xl  rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</button>
                    <button className="btn rounded-full btn-outline btn-primary">
                        <img src={btnPlayImg} alt="" />
                        Watch Demo</button>
                </div>
            </div>
            </div>
            <div>
                <img className='max-h-[500px] w-auto' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;