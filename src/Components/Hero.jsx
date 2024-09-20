import React from 'react'
import image from "../assets/image/parashar.png"
import { Parallax } from 'react-parallax'
const Hero = () => {
  return (
    <div className='bg-custom-dark relative my-5'>
      <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between items-center h-[700px]'>
        {/* details section */}
        <div className='space-y-6 order-2 lg:order-1'>
            <p className='text-xl font-bold uppercase '>hello, this is...</p>
            <h1 className='text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold py-4'>Parashar Das</h1>
            <p className='text-xl uppercase font-bold text-yellow-500'>A professional front-end Web Developer</p>
            <p className='text-lg'>From Chattogram, Bangladesh. I am that type of developer who is passionate about making new designed websites. I am good at making any kind of design to react dom. I love to talk with you about your unique web front site. </p>
            <Parallax strength={-200} >
              <div className='w-[100px] h-[100px] bg-yellow-400'>bg</div>
            </Parallax>
        </div>
        {/* image section */}
        <div className='p-10 order-1 lg:order-2 flex items-center justify-center w-[100%] h-[600px]'>
          <img src={image} alt="" className='aspect-square object-cover rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
