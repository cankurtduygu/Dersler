import { useState } from "react";


const AddTask = ({ todos, setTodos }) => {

  const [todo, setTodo] = useState('');
  const [todoDate, setTodoDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!todo.trim()){
      alert("please enter a todo!")
      return
    }

    const newTodo = {
      id:Date.now(),
      text:todo,
      day:todoDate,
      isDone: false
    }

    setTodos((todos)=>[newTodo, ...todos])

    setTodo("");
    setTodoDate("");
    
  }

  return (
    <div className="add-task-container">
      <form action="" onSubmit={handleSubmit}>
      <div className="form-control"> 
        <label htmlFor="text">Todo Description</label>
        <input 
          type="text" 
          id="todo" 
          name="todo" 
          value={todo}
          placeholder="What do you need to do" 
          onChange={(e) => setTodo(e.target.value)}
          />
      </div>
      <div className="form-control"> 
        <label htmlFor="date">Due Date & Time</label>
        <input 
          type="datetime-local" 
          id="date" 
          name="date" 
          value={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
        />
      </div>

      <button 
        className="btn btn-submit" 
        type="submit">➕ Add Task</button>

      </form>


     
    </div>
  )
}

export default AddTask
