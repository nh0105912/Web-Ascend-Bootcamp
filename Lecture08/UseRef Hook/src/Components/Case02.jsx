import React, { useRef } from 'react'

const Case02 = () => {
    const inputRef = useRef(null)
const handleFocus = ()=>{
    inputRef.current.focus()
    inputRef.current.style.backgroundColor ="red"
    inputRef
}
const handleClear =()=>{
    inputRef.current.value =""
    inputRef.current.style.border ="2px solid red"
}

  return (
    <>
    <h2>Case 02 : Access the DOM </h2>
    <input 
     placeholder='click btn '
     ref={inputRef}
     />
     <br /><br /><br />
     <button onClick={handleFocus}>Focus input </button>
     <button onClick={handleClear} >Clear input </button>
    </>
  )
}

export default Case02