import React from 'react'
import { Context } from '../App'
import { useContext } from 'react'

const GreatGrantChild = () => {
    const Theme =useContext(Context)
  return (
    <>
    <p>hello from Great Grant Child </p>

    <h1>{Theme}</h1>
    
    </>
  )
}

export default GreatGrantChild