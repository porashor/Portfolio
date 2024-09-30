import React, {  useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
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
        //get data from firestore 
        // const docRef = doc(dataStore, auth.currentUser?.displayName, auth.currentUser?.uid )
        // const snep = await getDoc(docRef)
        // if (snep.exists()) {
        //   await LoadedData(snep.data());
        // } else {
        //   console.log('No such document!');
        // }
        //redirecting the dashboard after 5s
        setInterval(()=>{
          window.location.href = "/desh"
        },5000)
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
    //login set data function
    // async function LoadedData(data){
    //   console.log(data)
    //   if(data){
    //     navigate("/desh", data)
    //   }
    // }

    // signOut function
    async function signingOut() {
      try{
        signOut(auth)
        //toast message
        toast.success("signout success",{
          position: "top-center"
        })
      }catch(er){
        console.log(er)
        //toast message
        toast.success("signOut faild!",{
          position : "top-center"
        })
      }
    }
    
  return {userLoged, signingIn, LogingIn, signingOut}
}

export default useFunc
