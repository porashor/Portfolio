import React, { useState } from 'react'
import { database } from '../auth/Auther'
import { ref, onValue } from 'firebase/database'



const Blog = () => {
  const [tata, setTata] = useState([])
  function ComeData(){
    const rf = ref(database, "language")
    onValue(rf, (e)=>{
      let arrayData = []
      e.forEach((e)=>{
        let keyD = e.key
        let Data = e.val()
        arrayData.push({'key': keyD, data:Data})
      })
      setTata(arrayData)
      console.log(arrayData)
    })
  }
  return (
    <div>
      this is blog pages
      <button onClick={ComeData}>getData</button>
    </div>
  )
}

export default Blog