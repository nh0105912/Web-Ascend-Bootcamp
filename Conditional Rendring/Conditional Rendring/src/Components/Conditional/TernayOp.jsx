import React from 'react'

const TernayOp = () => {
    const isAge = 17;
  return (
    <>
    {isAge >= 18 ? (
        <p>Adults</p>
    ):(
        <p>Not Adults</p>
    )}
    </>
  )
}

export default TernayOp