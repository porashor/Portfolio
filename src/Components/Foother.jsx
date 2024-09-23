import React from 'react'
import { DiGithub } from 'react-icons/di'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'

const Foother = () => {
  return (
    <div className='bg-slate-800 py-5 text-white'>
      <div className='w-[90%] mx-auto flex items-center justify-between'>
        {/* links */}
        <div className='flex gap-2 text-3xl'>
            <DiGithub/>
            <FaFacebook/>
            <LiaLinkedin/>
        </div>
        {/* copy right text */}
        <div className='text-yellow-500'>
          All copyright@ reserved by parashardxp
        </div>
      </div>
    </div>
  )
}

export default Foother
