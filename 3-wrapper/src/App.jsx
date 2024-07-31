import { useState } from 'react'

// Using Component Reference 
function App() {

  return (
    <>
      <CardWrapper InnerComponent={TextComponent} ></CardWrapper>
      <CardWrapper InnerComponent={TextComponent2} ></CardWrapper>
      
    </>
  )
}


//parent
function CardWrapper ({InnerComponent }) {

  return  <div style={{
      border: "2px solid black",
      padding: "10px"
     }} > 

    <InnerComponent/>
    </div>
 
}

// child 
function TextComponent() {
  return <div>
    hi there
  </div>
}
// child 2
function TextComponent2() {
  return <div>
    hi there 2
  </div>
}

export default App
