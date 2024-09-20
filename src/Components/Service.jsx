import React from 'react'
import Header from './Header'
import { services } from '../data/data'

const Service = () => {
  return (
    <div className='bg-custom-dark relative my-5'>
      <div className='w-[90%] mx-auto'>
        {/* header section */}
        <Header bold={"what can i do"} head={"My services"}/>
        {/* main section */}
        <div className='grid items-center justify-between gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10'>
            {services.map((item, index)=>(
                <div key={index} className='min-h-[200px] w-full bg-slate-800 rounded-xl'>
                    {/* icon section */}
                    <div className='text-7xl bold p-5'>
                        {item.icon}
                    </div>
                    {/* header section */}
                    <div className='text-2xl uppercase px-5 font-semibold'>
                        {item.header}
                    </div>
                    {/* details section */}
                    <div className='px-5 py-1'>
                        {item.details}
                    </div>
                    <button className='text-xl uppercase font-bold mx-5 px-2 py-2 hover:bg-yellow-500 my-10 rounded-full duration-200 transition-all'>{item.btn}</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Service
