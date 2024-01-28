import React from 'react'
import HeroPic from '../assets/Hero.jpg'
import Herosvg from '../assets/hero.svg'
import SvgBackground from './SvgBackground'
import { styles } from '../styling'

export default function Hero() {
    return (
        // Main Div here
        <div className='md:h-[100vh] flex flex-col md:flex-row mx-auto lg:max-h-[800px]'>
            <div className="left bg-[#4831d4] md:w-[60%] flex items-center min-h-[400px]">
                {/* inner left container */}
                <div className={`sm:mt-16 md:w-[60ch] w-[90%] mx-auto sm:pr-8`}>
                    <h1
                        className='text-[#ccf381] text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold'>
                        Frontend Devloper</h1>
                    <p className='text-sm text-white md:text-base py-6 md:py-12 w-full '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos recusandae ea molestias nobis, quisquam ut repudiandae eaque rem doloremque maiores architecto totam blanditiis. Sit!
                    </p>
                    <div className='flex justify-between text-white'>
                        <p className='text-xs md:text-sm mr-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos recusandae.
                        </p><p className='text-xs md:text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos recusandae ea molestias nobis.
                        </p>
                    </div>


                </div>
            </div>
            <div className="right border-2 w-full md:w-[40%] bg-[#ccf381] md:h-full grid place-content-center relative min-h-[300px]">
                <SvgBackground />
                <figure className='w-full flex justify-center align-center'>
                    <img src={HeroPic} alt="Hero Pic" className='heroPicShadow z-10 w-[40%] md:w-[60%] max-w-[450px]' />
                </figure>
            </div>
        </div>
    )
}
