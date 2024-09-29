import React from 'react'

const Desboard = () => {
    const data = true;
  return data ? <div className='w-full h-[700px] bg-custom-dark text-white'>
  <div className='w-[90%] mx-auto'>
      {/* image section */}
      <div></div>
      {/* details section */}
      <div className='w-[90%] md:w-[70%] lg:w-[60%] xl:w-[40%] mx-auto border-2 border-yellow-300 rounded-2xl p-5 min-h-[400px] grid grid-cols-2'>
        <div>
          <p>tewxt</p>
        </div>
      </div>
  </div>
</div> : <div>Loading...</div>
}

export default Desboard




