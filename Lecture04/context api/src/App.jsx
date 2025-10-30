import React, { createContext } from 'react'

const Context = createContext()
function App() {
  // const [user ,setuser] = useState("hello from Great Grant child")
  return (
    <>
    <Context.provider value="">
      <child/>
    </Context.provider>
    
    </>
  )
}

export default App