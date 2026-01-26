import React from 'react'

const Header = ({setIsFormVisible, isFormVisible}) => {
  return (
    <div>
    
    <div className='header'> 
        <h1>📋 My Todo App</h1>
        <button 
        style={{ background: isFormVisible ? '#e74c3c' : '#9b59b6'}}
        className='btn'
        onClick={() => setIsFormVisible((prev)=>!prev)}
        >
        {isFormVisible ? 'Hide' : 'Show'} Add Task Form</button>
    </div>
    </div>
  )
}

export default Header