import React from 'react'

const LogicOp = () => {

  const isLogin =true;
    
  return (
    <>
    <h1>LogicOp</h1>

    {isLogin && "show student Dashboard"}
    </>
  )
}

export default LogicOp