import { useState, memo } from "react"
import React from "react"


function  App() {


  const [title, setTitle] = useState("my name is sachin")

  function AddTitle(){
    setTitle("my name is " + Math.random());
  } 

  
 return(
  <div>
 
    <button onClick={AddTitle} >click me</button>
    <Header title={title} ></Header>
    <Header title="my name gojo"></Header>
    <Header title="my name gojo"></Header>
    <Header title="my name gojo"></Header>
    <Header title="my name gojo"></Header>

  </div>
  )
}
 

const Header = memo( function Header ({title}){
  return <div>
    {title}
  </div>
 })

 export default App