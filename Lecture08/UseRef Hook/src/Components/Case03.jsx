import React, { useEffect, useRef, useState } from 'react'

function Case03() {
    const [count ,setcount] =useState(0);
    const prevCount = useRef()

    useEffect(()=>{
        prevCount.current=count
    })
  return (

    <>
    <h2>Case 03 : using referance of variable</h2>
    <p>count : {count}</p>
    <p>PrevCount : {prevCount.current}</p>
    <button onClick={()=>(setcount(count+1))}>increase</button>
    
    </>
  )

}

export default Case03
