import React, { useEffect, useState } from 'react'
import Header from './Header'
import useFunc from '../customHooks/useFunc'



const SignIn = () => {
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [mem, setMem] = useState('')
    const [dur, setDur] = useState('')
    const [curr, setCurr] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [file, setFile] = useState(null)
    const {userLoged, signingIn} = useFunc()
    //full name create 
    const fullName = fname+ " " + lname
    //call function 
    function formSub(e){
        e.preventDefault()
        signingIn(email, pass, fullName, mem, dur, curr, file)
    }
  return (
    <div className='bg-custom-dark text-white py-10'>
        <div className='w-[90%] mx-auto group'>
        {/* heading section */}
        <Header bold={"Sing In"} head={"if you need any kind of memnbership you need to register here."}/>
        {/* main form here */}
        <form onSubmit={formSub} className='border-2 border-slate-100 shadow-md shadow-red-50 py-10 px-5 w-[80%] md:w-[480px] mx-auto rounded-xl flex flex-col gap-5'>
            {/* firstname */}
            <div className='text-xl grid grid-cols-[1fr_3fr] items-center'>
                <label htmlFor="fname" className='font-semibold'>FirstName:</label>
                <input type="text" name="" placeholder='Sumit' id="fname" className='w-full py-1 px-2 rounded-md text-black outline-none' value={fname} onChange={(e)=>setFname(e.target.value)} />
            </div>
            {/* lastname */}
            <div className='text-xl grid grid-cols-[1fr_3fr] items-center'>
                <label htmlFor="lname" className='font-semibold'>LastName:</label>
                <input type="text" name="" placeholder='saha' id="lname" className='w-full py-1 px-2 rounded-md text-black outline-none' value={lname} onChange={(e)=>setLname(e.target.value)}/>
            </div>
            {/* membership status radio use */}
            <div className='text-xl grid grid-cols-[1fr_3fr] items-center'>
                <label htmlFor="mem" className='font-thin'>Membership:</label>
                <select name="" id="mem" className='w-full py-1 px-2 rounded-md text-black outline-none' onChange={(e)=>setMem(e.target.value)}>
                    <option value="normal">Normal</option>
                    <option value="stander">Stander</option>
                    <option value="best">best</option>
                </select>
            </div>
            {/* duration */}
            <div className='text-xl grid grid-cols-[1fr_3fr] items-center'>
                <label htmlFor="dura" className='font-semibold'>Duration:</label>
                <input type="datetime-local" name=""  onChange={(e)=>setDur(e.target.value)} id="dura" className='w-full py-1 px-2 rounded-md text-black outline-none' />
            </div>
            {/* currency */}
            <div className='text-xl grid grid-cols-[1fr_3fr] items-center'>
                <label htmlFor="curr" className='font-semibold'>Currency:</label>
                <select name="" id="mem" className='w-full py-1 px-2 rounded-md text-black outline-none' onChange={(e)=>setCurr(e.target.value)}>
                    <option value="bdt">BDT</option>
                    <option value="usd">USD</option>
                    <option value="inr">INR</option>
                </select>
            </div>
            {/* email */}
            <div className='text-xl grid grid-cols-[1fr_3fr] items-center'>
                <label htmlFor="Email" className='font-semibold'>Email:</label>
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='example@email.com' name="" id="Email" className='w-full py-1 px-2 rounded-md text-black outline-none'/>
            </div>
            {/* Password */}
            <div className='text-xl grid grid-cols-[1fr_3fr] items-center'>
                <label htmlFor="pass" className='font-semibold'>Password:</label>
                <input type="pass" name="" id="Email" className='w-full py-1 px-2 rounded-md text-black outline-none' value={pass} onChange={(e)=>setPass(e.target.value)}/>
            </div>
            {/* image */}
            <div className='text-xl grid grid-cols-[1fr_3fr] items-center'>
                <label htmlFor="Email" className='font-semibold'>Image:</label>
                <input type="file" name="" id="email" className='w-full py-1 px-2 rounded-md text-black outline-none' onChange={(e)=>setFile(e.target.files[0])} />
            </div>
            <button type='submit' className='bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-black duration-200 transition-all uppercase text-xl'>Log in</button>
        </form>
        {userLoged}
        <img src={file?.name} alt="" />
        </div>
    </div>
  )
}

export default SignIn
