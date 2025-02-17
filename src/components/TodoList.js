import React, {useState} from 'react'

function TodoList() {
  let [todos, setTodos] = useState([]);
  let [task, setTask] = useState("");
  const updateTodos = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]); 
    setTask("");
  }
  return (
    <div>
        <h3>To-Do List</h3>
        <input onChange={(e)=> setTask(e.target.value)} type="text" />
        <button onClick={updateTodos}>Add Todo</button>
        <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList