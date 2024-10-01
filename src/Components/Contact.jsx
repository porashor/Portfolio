import React from 'react'
import Header from './Header'
import { contact } from '../data/data'

const Contact = () => {
  return (
    <div className='bg-custom-dark py-5 text-white'>
      <div className='w-[90%] mx-auto'>
        {/* header section */}
        <Header bold={"contact"} head="Are you looking for your business?"/>
        {/* main section for contact */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-between py-5'>
          {contact.map((item,index)=>(
            <div data-aos={item.aos} key={index} className='w-full min-h-[100px] rounded-lg bg-slate-700'>
              {/* icon file here  */}
              <div className='text-5xl font-bold flex items-center justify-center pt-5 text-yellow-300'>
                {item.icon}
              </div>
              {/* name section */}
              <div className='text-center  font-bold text-4xl py-2'>
                {item.name}
              </div>
              {/* details section */}
              <div className='text-center text-xl text-yellow-500 pb-5'>
                {item.P}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
