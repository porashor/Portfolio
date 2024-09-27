import React, { useState } from 'react'
import Header from './Header'
import useFunc from '../customHooks/useFunc'
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const {userLoged,document, LogingIn} = useFunc()
  //navigation create
  const history = useNavigate()
  //calling the function
  function Log(e){
    e.preventDefault()
    LogingIn(email, pass)
  }
  console.log(document)
  return (
    <div className='bg-custom-dark text-white py-10'>
        <div className='w-[90%] mx-auto group'>
        {/* heading section */}
        <Header bold={"Log In"} head={"if you have an account you can loged in here."}/>
        {/* main form here */}
        <form onSubmit={Log} className='border-2 border-slate-100 shadow-md shadow-red-50 py-10 px-5 w-[80%] md:w-[480px] mx-auto rounded-xl flex flex-col gap-5'>
            <div className='text-xl grid grid-cols-[1fr_3fr] items-center'>
                <label htmlFor="Email" className='font-semibold'>Email:</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="" id="Email" className='w-full py-1 px-2 rounded-md text-black outline-none' />
            </div>
            <div className='text-xl grid grid-cols-[1fr_3fr] items-center'>
                <label htmlFor="pass" className='font-semibold'>Password:</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="pass" name="" id="Email" className='w-full py-1 px-2 rounded-md text-black outline-none'/>
            </div>
            <button type='submit' className='bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-black duration-200 transition-all uppercase text-xl'>Log in</button>
        </form>
        {userLoged}
        </div>
    </div>
  )
}

export default LogIn