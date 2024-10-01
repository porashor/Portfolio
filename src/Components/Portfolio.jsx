import React from 'react'
import Header from './Header'
import { portfolioData } from '../data/data'

const Portfolio = () => {
  return (
    <div className='bg-custom-dark relative py-5'>
        <div className='w-[90%] mx-auto'>
            {/* main header section */}
            <Header bold={"my Portfolio"} head={"My cases"}/>
            {/* main portfolio section */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-between gap-5">
                {portfolioData.map((item, index)=>(
                    <div key={index} className='w-full min-h-[200px] bg-slate-800 rounded-2xl p-5 ' data-aos={item.aos}>
                        {/* image section */}
                        <div>
                            <img src={item.Image} alt="" className='rounded-xl' />
                        </div>
                        {/* tecnology */}
                        <div className='text-xl uppercase font-semibold py-2 text-yellow-500'>
                            {item.tec}
                        </div>
                        {/* header */}
                        <div className='text-2xl capitalize font-semibold'>
                            {item.header}
                        </div>
                        {/* button section */}
                        <div className='text-xl uppercase my-2 py-2 px-3 bg-yellow-500 hover:bg-yellow-300 hover:text-black w-fit rounded-full cursor-pointer duration-200 transition-all'>{item.btn}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
