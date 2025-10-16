import React from 'react'
import Child from './Child'
import image from "./assets/image.jpg"
import "./App.css"

const App = () => {
  return (
    <>
    <div className="main">
    <Child  image = {image} title ="title " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos, iusto cumque fugiat provident dolorem eaque est commodi reprehenderit sunt facilis eveniet pariatur voluptas corrupti neque non aliquid hic quod?"/>
    <Child  image = {image} title ="title " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos, iusto cumque fugiat provident dolorem eaque est commodi reprehenderit sunt facilis eveniet pariatur voluptas corrupti neque non aliquid hic quod?"/>
    <Child  image = {image} title ="title " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos, iusto cumque fugiat provident dolorem eaque est commodi reprehenderit sunt facilis eveniet pariatur voluptas corrupti neque non aliquid hic quod?"/>
    <Child  image = {image} title ="title " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos, iusto cumque fugiat provident dolorem eaque est commodi reprehenderit sunt facilis eveniet pariatur voluptas corrupti neque non aliquid hic quod?"/>
    <Child  image = {image} title ="title " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos, iusto cumque fugiat provident dolorem eaque est commodi reprehenderit sunt facilis eveniet pariatur voluptas corrupti neque non aliquid hic quod?"/>
   </div>
  
    </>
  )
}

export default App