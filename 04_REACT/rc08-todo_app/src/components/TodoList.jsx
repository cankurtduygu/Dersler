import todos from "../helper/Data";
import { TiDelete } from "react-icons/ti"

const TodoList = ({todos, setTodos}) => {
  const handleToggleComplete = (id) => {  
    
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo=>todo.id !==id))
   
  }

  return (
    <div className="todo-list-container">
    {
      todos.map((todo)=>{
        return (
          <div 
          className="todo-item" 
          key={todo.id}
          onDoubleClick={()=>handleToggleComplete(todo.id)} >
            <div className="todo-content">
              <h3 className="todo-text">
                {todo.isDone && <span className="check-icon">✔️</span>}
                {todo.text}
              </h3>
              {todo.day && (<p>{new Date(todo.day).toLocaleString()}</p>
              )}
            </div>
            <TiDelete className="delete-icon" title="Delete task" onClick={()=>handleDelete(todo.id)} />
          </div>
        )
      })
    }
    
    </div>
  )
}

export default TodoList
