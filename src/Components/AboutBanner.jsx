import React from 'react'
import banner from "../assets/image/parashar.png"



const AboutBanner = () => {
  return (
    <div className='bg-custom-dark py-10 text-white'>
        <div className='w-[90%] mx-auto flex items-center justify-center h-[600px]'>
            <div>
                {/* image section */}
                <div className='flex items-center justify-center  ' >
                <img src={banner} alt="" data-aos="zoom-in"  className='w-[350px] aspect-square object-cover rounded-full bg-blue-700 p-2' />
                </div>
                {/* main name section */}
                <h1 data-aos="fade-left" data-aos-delay="1000" className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-5 text-center font-bold uppercase'>Parashar Das</h1>
                {/* title section */}
                <p data-aos-delay="2000" data-aos="fade-right"  className='text-center text-xl md:text-2xl font-semibold text-yellow-500'>Front-end Web developer(react js)</p>
            </div>
        </div>
    </div>
  )
}

export default AboutBanner
