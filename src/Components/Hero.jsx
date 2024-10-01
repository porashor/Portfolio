import React from 'react'
import image from "../assets/image/parashar.png"
import { MouseParallax, ScrollParallax } from "react-just-parallax";
const Hero = () => {
  return (
    <div data-aos="fade-in" className='bg-custom-dark relative py-5'>
      <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between items-center min-h-[700px]'>
        {/* details section */}
        <div data-aos="fade-down" className='space-y-6 order-2 lg:order-1'>
            <p className='text-xl font-bold uppercase '>hello, this is...</p>
            <h1 className='text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold py-4'>Parashar Das</h1>
            <p className='text-xl uppercase font-bold text-yellow-500'>A professional front-end Web Developer</p>
            <p className='text-lg'>From Chattogram, Bangladesh. I am that type of developer who is passionate about making new designed websites. I am good at making any kind of design to react dom. I love to talk with you about your unique web front site. </p>
            <ScrollParallax>
            <button className='px-3 py-1 text-xl uppercase rounded-lg hover:scale-110 duration-200 transition-all bg-yellow-400'>see more</button>
            </ScrollParallax>
        </div>
        {/* image section */}
        <div className='p-10 order-1 lg:order-2 flex items-center justify-center w-[100%] h-[600px] relative'>
          <img data-aos="zoom-in" src={image} alt="" className='aspect-square object-cover rounded-full'/>
          <div className='absolute top-[50%] left-0 ' data-aos="zoom-in" data-aos-delay="2000">
            <MouseParallax>
              <button className=' px-3 py-1 text-xl uppercase rounded-lg hover:scale-110 duration-200 transition-all bg-yellow-400'>HTML</button>
            </MouseParallax>
          </div>
          <div className='absolute top-[50%] right-0' data-aos="zoom-in" data-aos-delay="2000" >
            <MouseParallax>
              <button className=' px-3 py-1 text-xl uppercase rounded-lg hover:scale-110 duration-200 transition-all bg-yellow-400'>React JS</button>
            </MouseParallax>
          </div>
          <div className='absolute left-[40%] bottom-[20px]' data-aos="zoom-in" data-aos-delay="2000">
            <MouseParallax>
              <button className=' px-3 py-1 text-xl uppercase rounded-lg hover:scale-110 duration-200 transition-all bg-yellow-400'>Tailwind CSS</button>
            </MouseParallax>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
