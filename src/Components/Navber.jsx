import React, { useState } from 'react'
import { navbr } from '../data/data'
import { MdMenu } from 'react-icons/md'
import { BiX } from 'react-icons/bi'
import {Link} from "react-router-dom"


const Navber = ({user}) => {
  const [manu, setMenu] = useState(true)
  console.log(user)
  return (
    <div className='py-5 bg-custom-dark text-white'>
      <div className='w-[90%] mx-auto flex items-center justify-between gap-5'>
        {/* logo section */}
        <Link to="/">
          <div className='text-2xl md:text-3xl lg:text-4xl uppercase font-bold cursor-pointer'>Parashar.</div>
        </Link>
        {/* nav section */}
        <div>
          {user ? <div>{user}</div>: <div></div>}
            <nav className='hidden md:flex items-center justify-center gap-7 text-xl font-bold'>
              {navbr.map((item, index)=>(
                <div key={index} className='hover:bg-yellow-500 py-1 px-3 rounded-full duration-200 transition-all'><a href={item.links}>{item.name}</a></div>
              ))}
              <a href="/desh" className='bg-yellow-500 py-1 px-3 rounded-full'>Say hello!</a>
            </nav>
            <div className='block md:hidden text-2xl'>
              {manu? <MdMenu onClick={()=>setMenu(false)}/> : <BiX onClick={()=>setMenu(true)}/>}
            </div>
            {/* mobile navber */}
            {manu ? "" : <div className='absolute z-[100] md:hidden w-[200px] h-[300px] bg-black/90 right-[3rem] top-[100px] rounded-2xl py-7 px-2 '>
            {/* navber */}
              <nav className='text-xl font-semibold'>
              {navbr.map((item, index)=>(
                <div key={index} className=' py-1 px-3 rounded-full duration-200 transition-all'><a href={item.links}>{item.name}</a></div>
              ))}
              <a href="" className=' py-1 px-3 rounded-full my-2'>Say hello!</a>
            </nav>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Navber
