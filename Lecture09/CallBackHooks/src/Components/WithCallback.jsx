import React, { useCallback, useState } from 'react'

const WithCallback = () => {
const[count ,setcount] =useState(0)

const handleClick = useCallback(()=>{
    console.log("clicked")
},[])

console.log("parent re rendered")
  return (
    <>

    <h2>With call backs</h2>
    <button onClick={()=>{ setcount(count+1)}}>Increase :{count}</button>
    <Child onClick ={handleClick}/>
    
    </>
  )
}

const Child =React.memo( ({ onClick }) => {
  console.log("Child rendered");
  return (
    <button onClick={onClick}>
      Click Child
    </button>
  );
});


export default WithCallback