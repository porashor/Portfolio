import React, { useState } from 'react'
import LogIn from './LogIn'
import SignIn from './SignIn'

const AccountCheck = () => {
    const [show, setShow] = useState(false)
    function loged(){
        setShow(true)
    }
    function signed(){
        setShow(false)
    }
  return (
    <div className='bg-custom-dark text-white min-h-[100vh] '>
      <div className='w-[80%] mx-auto'>
        {/* main field show area  */}
        {
            show ? <div><LogIn/></div> : <div><SignIn/></div>
        }
        {/* check text area  */}
        <div>already, if you have an account <span onClick={loged} className='text-lg uppercase font-bold text-yellow-400 cursor-pointer'>Log In</span> or <span onClick={signed} className='text-lg uppercase font-bold text-yellow-400 cursor-pointer'>create an account</span>
        </div>
      </div>
    </div>
  )
}

export default AccountCheck
