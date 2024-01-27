import React from 'react'
import HeroPic from '../assets/Hero.jpg'
import Herosvg from '../assets/hero.svg'
import SvgBackground from './SvgBackground'

export default function Hero() {
    return (
        // Main Div here
        <div className='h-[100vh] flex flex-col md:flex-row max-w-7xl mx-auto'>
            <div className="left bg-[#4831d4] md:w-[60%]  flex items-center py-20">
                {/* inner left container */}
                <div className="mt-16 md:w-[60ch] max-w-5xl w-[90%] mx-auto pr-8">
                    <h1
                        className='text-[#ccf381] text-center md:text-left text-3xl md:text-5xl font-bold'>
                        Frontend Devloper</h1>
                    <p className='text-sm text-white md:text-base py-6 md:py-12 w-full '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos recusandae ea molestias nobis, quisquam ut repudiandae eaque rem doloremque maiores architecto totam blanditiis. Sit!
                    </p>
                    <div className='flex justify-between text-white'>
                        <p className='text-xs mr-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos recusandae.
                        </p><p className='text-xs '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos recusandae ea molestias nobis.
                        </p>
                    </div>


                </div>
            </div>
            <div className="right border-2 w-full md:w-[40%]  bg-[#ccf381] md:h-full grid place-content-center relative">
                <SvgBackground />
                <figure className='w-full py-20 flex justify-center align-center'>
                    <img src={HeroPic} alt="Hero Pic" className='heroPicShadow z-10 w-[40%] md:w-[60%] max-w-[450px]' />
                </figure>
            </div>
        </div>
    )
}
