import { useState } from 'react'

let counter = 4;

function App() {
  const [todo, setTodo] = useState([
    {
      id:1,
      title: "study code daily",
      description: "from cohort"
    },{
      id:2,
      title: "workout daily",
      description: "be healthy"
    },{
      id:3,
      title: "eat properly",
      description: "with intrest"
    } 

  ])
 
  // ...todo: This is the spread operator, which creates a shallow copy of the existing todo array. This is important because you want to create a new array rather than mutating the existing state directly.

 function addTodo() {
   setTodo([...todo, {
    id: counter++,
    title: Math.random(),
    description: Math.random()
   }])
 }
  

 
  return (
    <>
     <button onClick={addTodo} >Add a todo</button>

     {todo.map(item => <Todos key={item.id} title={item.title} description={item.description} ></Todos> )}
    </>
  )
}

function Todos({title, description}){

  return <div>
    <h1>{title} </h1> 
    <h5> {description} </h5>
  </div>
}

export default App
