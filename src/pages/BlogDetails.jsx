import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BlogDetails = () => {
    const location = useLocation()
    const data = location.state
    console.log(data)
  return (
    <div className='bg-custom-dark text-white py-10'>
      {data ? <div className='w-[90%] mx-auto min-h-[400px]'>
        {/* img section  */}
        <img src={data.img} alt="" className='w-full h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] object-cover' />
        {/* title section  */}
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold uppercase py-5  '>{data.title}</h1>
        <p className='text-xl'>{data.details}</p>
        <p>{data.time}</p>
      </div> : <div>loading...</div>}
    </div>
  )
}

export default BlogDetails
