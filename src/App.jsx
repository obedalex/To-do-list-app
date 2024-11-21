import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Components/ToDoList';



function App(){
  return(
    <div className="to-do-list">
      <TodoList/>
    </div>
  )
}

export default App