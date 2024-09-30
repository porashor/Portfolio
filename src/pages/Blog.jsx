import React, { useEffect, useState } from 'react'
import { auth, database } from '../auth/Auther'
import { ref, onValue } from 'firebase/database'
import Header from '../Components/Header'
import { BlogData } from '../data/data'
import {Link} from "react-router-dom"
import LogIn from '../Components/LogIn'
import useFunc from '../customHooks/useFunc'


const Blog = () => {
  const tabStyle = 'px-2 transition-all duration-300 py-2 bg-slate-700 min-h-[200px] rounded-lg relative group' 
  const [usermake, setUsermake] = useState(false)
  const {signingOut} = useFunc()
  useEffect(()=>{
    if(auth.currentUser === null){
      setUsermake(false)
    }else{
      setUsermake(true)
    }
  },[auth.currentUser])
  console.log(auth.currentUser)
  return (
    <div className='bg-custom-dark py-10 text-white'>
      {
        usermake ? <div className='w-[90%] mx-auto'>
          <button className='bg-green-400' onClick={signingOut}>signOut</button>
        {/* header section */}
        <Header bold={"All updates here"} head={"if you are new in this field you can learn more and more!"}/>
        {/* main section here  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-5'>
          {BlogData.map((item, index)=>(
            <div key={index} className={tabStyle}>
              {/* image section */}
              <div className='m-3 w-[300px] h-[200px] object-cover'>
                <img src={item.img} alt="" className='w-full h-full rounded-lg' />
              </div>
              {/* overlay section  */}
              <div className='hidden group-hover:block w-full h-full bg-black/40 absolute top-0 left-0 rounded-lg '>
                {/* name section  */}
                <div className='text-center space-y-3'>
                  <p className='text-3xl font-semibold uppercase pt-5 pb-2'>{item.title}</p>
                  <p className='text-xl pb-2'>{item.details}</p>
                  <button className='uppercase bg-green-400 py-1 px-3 rounded-lg font-bold'><Link to={"/bom"} state={item}>see details</Link></button>
                </div>
                <p className='text-xl pb-2'>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div> : <LogIn/>
      }
    </div>
  )
}

export default Blog