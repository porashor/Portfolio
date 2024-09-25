import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, dataStore } from '../auth/Auther'
import {doc, setDoc} from "firebase/firestore"
import { toast } from 'react-toastify'

const useFunc = () => {
    const [userLoged, setUserLoged] = useState()
    async function signingIn(email, pass, fname, member, duration, currency, image){
        //creacte user with email and password
        try{
            await createUserWithEmailAndPassword(auth, email, pass)
            //profile update
            const user = auth.currentUser
            if(user){
              await updateProfile(user, {
                displayName : fname
              })
            }
            //name assign 
            setUserLoged(user?.displayName)
            //send data in the firestore 
            if(dataStore){
              //data reference
              const docReff = doc(dataStore, fname, user?.uid)
              await setDoc(docReff,{
                Name: fname,
                email: email,
                membership: member,
                duration: duration,
                currency: currency,
                image: "image" 
              })
            }
            //toast message 
            toast.success("create account success",{
              position: "top-center"
            })
            //redirecting home
            setTimeout(()=>{
              window.location.href = "/"
            },5000)
        }
        catch(err){
            console.log(err)
        }
    }
    
  return {userLoged, signingIn}
}

export default useFunc
