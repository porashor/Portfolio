import React from 'react'
import Header from './Header'
import { testimonial } from '../data/data'

const Testimonial = () => {
  return (
    <div className='bg-custom-dark py-10'>
      <div className='w-[90%] mx-auto'>
        {/* main header */}
        <Header bold={"Testimonial"} head={"What my client are saying?"}/>
        {/* main section */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-between gap-5'>
          {testimonial.map((item, index)=>(
            <div key={index} className='w-full bg-slate-700 min-h-[200px] rounded-xl py-4 px-3 space-y-3'>
              {/* details section */}
              <p className='text-xl'>{item.details}</p>
              {/* image section */}
              <div>
                <img src={item.Image} alt="" className='w-[80px] aspect-square object-cover rounded-full bg-blue-500 p-2' />
              </div>
              {/* name section */}
              <div className='text-2xl text-yellow-500 font-semibold'>
                {item.name}
              </div>
              {/* occ section */}
              <div className='text-3xl font-bold'>
                {item.Occ}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
