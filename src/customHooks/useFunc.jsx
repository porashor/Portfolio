import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, dataStore } from '../auth/Auther'
import {doc, getDoc, setDoc} from "firebase/firestore"
import { toast } from 'react-toastify'

const useFunc = () => {
    const [userLoged, setUserLoged] = useState()
    const [document, setDocument] = useState()
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
          //toast message 
          toast.success("operation failed!",{
            position: "bottom-right"
          })
        }
    }
    //loging function
    async function LogingIn(email, pass) {
      try{
        //log in here
        await signInWithEmailAndPassword(auth, email, pass)
        //profile update
        await setUserLoged(auth.currentUser?.displayName)
        const userId = auth.currentUser?.uid
        //get data from firestore 
        const docRef = doc(dataStore, userLoged, userId )
        const snep = await getDoc(docRef)
        if (snep.exists()) {
          setDocument(snep.data());
        } else {
          console.log('No such document!');
        }
        //toast message
        toast.success("log in successful",{
          position: "top-center"
        })
      }catch(err){
        console.log(err)
        //toast message
        toast.success("log in failed!",{
          position: "bottom-right"
        })
      }
    }
    
  return {userLoged, document, signingIn, LogingIn}
}

export default useFunc
