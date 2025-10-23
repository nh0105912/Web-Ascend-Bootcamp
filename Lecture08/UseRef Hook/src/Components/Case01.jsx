import React, { useState,useRef } from 'react'

const Case01 = () => {

    const [count, setcount] = useState(0)
    const refCount =useRef(0)
  return (
    <>

    <h1>Case01 : Prevention of re-randring</h1>
    <p>State count : {count}</p>
    <p>UseRef State : {refCount.current}</p>

    <div>
        <button onClick={()=>{setcount(count+1)}}>increase state</button>
        <button onClick={()=>{refCount.current+=1; 
             alert(`the use Ref now ${refCount.current}`)}}>UseRef Count</button>
    </div>


    
    
    </>
  )
}

export default Case01