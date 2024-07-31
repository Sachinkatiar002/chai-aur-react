import { useState } from 'react'

// Using Component Reference 
function App() {

  return (
    <>
      <CardWrapper>

        <TextComponent/>

      </CardWrapper>
      
      <CardWrapper> 
        <div>
          hi there 2 
        </div>
      </CardWrapper>
     
      
    </>
  )
}


//parent
function CardWrapper ({ children }) {

  return  <div style={{
      border: "2px solid black",
      padding: "10px"
     }}> 
    
    {children}
    
    </div>
 
}


function TextComponent() {
  return <div>
  hi from TextComponent
  </div>
}

// // child 1
// function TextComponent() {
//   return <div>
//     hi there
//   </div>
// }
// // child 2
// function TextComponent2() {
//   return <div>
//     hi there 2
//   </div>
// }

export default App
