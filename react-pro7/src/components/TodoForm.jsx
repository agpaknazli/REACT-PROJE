import React, { useRef, useState } from 'react'
import TodoItem from './TodoItem';


const TodoForm = () => {
const[value, setValue]=useState("");
const data=useRef();
const handleSubmit=(e)=>{
  e.preventDefault();
  const İnputText=data.current.value.trim();
  if(İnputText===""){
    return null;

  }
  data.current.value="";
    
console.log(İnputText)

}



  return (
    <form className='TodoForm' onSubmit={handleSubmit} >
    <input ref={data} className='todo-input placeholder:text-sclate-400' 
    
    
    // value={value} onChange={(e)=>setValue(e.target.value.trim())}
    
    placeholder='Enter Your Todo' type="text" name='todo' id='todo' />

    <button  type="submit" onChange={()=>handleSubmit()} className='todo-btn'>Add New Task</button>




       <div className=''>
      
        {/* YAPILACAK GÖREVLER */}
        
        <TodoItem/>
        </div> 
        
        </form>
  )
}

export default TodoForm