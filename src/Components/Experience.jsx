import React from 'react'
import Header from './Header'
import { experience } from '../data/data'



const Experience = () => {
  return (
    <div className='bg-custom-dark py-10 '>
        <div className='w-[90%] mx-auto'>
            {/* header section */}
            <Header bold={"Experience"} head="What i have done?"/>
            {/* main section */}
            <div className='flex flex-col items-start justify-center gap-10'>
                {experience.map((item, index)=>(
                    <div key={index} className='w-full min-h-[100px] text-white bg-slate-700 rounded-xl grid grid-cols-[1fr_3fr] lg:grid-cols-[1fr_10fr]'>
                        {/* icon section */}
                        <div className='text-4xl flex items-center justify-center text-yellow-500'>
                            {item.icon}
                        </div>
                        {/* details section */}
                        <div className='space-y-2 py-3'>
                            <p className='text-xl font-semibold'>{item.time}</p>
                            <p className='font-bold text-2xl'>{item.task}</p>
                            <p>{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience
