import React from 'react'

const Header = ({bold, head}) => {
  return (
    <div className='text-center text-white space-y-2 py-10' data-aos="zoom-in" data-aos-delay="200">
      <h1 className='text-3xl md:text-4xl font-bold uppercase mb-2'>{bold}</h1>
      <p className='text-lg md:text-xl text-yellow-400 pb-2'>{head}</p>
    </div>
  )
}

export default Header
