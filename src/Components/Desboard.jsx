import React from 'react'
import useFunc from '../customHooks/useFunc'

const Desboard = () => {
    const {document} = useFunc()
    console.log(document)
  return document ? <div className='w-full h-[700px] bg-custom-dark text-white'>
  <div className='w-[90%] mx-auto'>
      {/* image section */}
      <div></div>
      {/* details section */}
      <div className='w-[90%] md:w-[70%] lg:w-[60%] xl:w-[40%] mx-auto border-2 border-yellow-300 rounded-2xl p-5 min-h-[400px]'>hjhjhjh</div>
  </div>
</div> : <div>Loading...</div>
}

export default Desboard




{/*  */}