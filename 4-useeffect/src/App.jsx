import { useState, useEffect } from 'react'

// https://sum-server.100xdevs.com/todos



function App() {
  
  const [todos, setTodos] = useState([])
  
 
  useEffect(() => {   
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      } )
    }, 10000);
  }, [])


  


  return (
    <>
      {todos.map(item =>  <Todo key={item.id} title={item.title} description= {item.description} ></Todo>)}
      
    </>
  )
}

function Todo ({title, description}) {

  return <div>
     
    <h1>{title} </h1>
    <h5> {description} </h5>

  </div>
}



export default App
