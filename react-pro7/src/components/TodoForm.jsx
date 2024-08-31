import React, { useState } from 'react'
import TodoItem from './TodoItem';


const TodoForm = () => {
const[value, setValue]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
}



  return (
    <form className='TodoForm' onSubmit={handleSubmit} >
    <input className='todo-input placeholder:text-sclate-400' value={value} onChange={(e)=>setValue(e.target.value)
    }  placeholder='Enter Your Todo' type="text" name='todo' id='todo' />

    <button  type="submit" className='todo-btn'>Add New Task</button>




       <div className=''>
      
        {/* YAPILACAK GÖREVLER */}
        
        <TodoItem/>
        </div> 
        
        </form>
  )
}

export default TodoForm