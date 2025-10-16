import React, { createContext, useState } from 'react'
import Child from './Components/Child'

const Context = createContext();

function App() {
const [Theme] = useState("By default Theme")

  return (

    <>
    <Context.Provider value={Theme}>
    <Child/>
    </Context.Provider>
    </>
  )
}

export default App

export {Context}