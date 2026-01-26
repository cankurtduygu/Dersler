/**
 * Home Component - Main container for the Todo App
 * 
 * This is the main page component that manages the state of all todos
 * and coordinates between AddTask and TodoList components
 */

import { useState } from "react"
import AddTask from "../components/AddTask"
import Header from "../components/Header"
import TodoList from "../components/TodoList"
import { todos as savedTodos } from "../helper/Data";


const Home = () => {

  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("TODOS")) ?? []
  })

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos))
  }, [todos])
  const [isFormVisible, setIsFormVisible] = useState(true)

  return (
    <div className="home-container">
      <Header setIsFormVisible={setIsFormVisible} isFormVisible={isFormVisible}/>
      { isFormVisible && <AddTask todos={todos} setTodos={setTodos} /> }
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Home