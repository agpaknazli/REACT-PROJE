import React, { useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem';
import { FaPlus } from "react-icons/fa";


const TodoForm = () => {
const[value, setValue]=useState([]);
const data=useRef();
const handleSubmit=(e)=>{
  e.preventDefault();
  const İnputText=data.current.value.trim();
  if(İnputText===""){
    return null;

  }
 
    
const newTode={
  id:value.length+1,
  text:İnputText,
  İsComplete:false
};

setValue((prev)=>[...prev,newTode]);
data.current.value="";
};

const toggle=(id)=>{
setValue((prevValue)=>{
  return prevValue.map((todo)=>{

if(todo.id===id){
  return {...todo, İsComplete: !todo.İsComplete};
}
 return todo;
  })

})
}


useEffect(()=>{

},[value]);



  return (
    <form className='TodoForm' onSubmit={handleSubmit} >

      <div className='add'>
    <input ref={data} className='todo-input placeholder:text-sclate-400' 
    
    
    // value={value} onChange={(e)=>setValue(e.target.value.trim())}
    
    placeholder='Enter Your Todo' type="text" name='todo' id='todo' />

    <button  type="submit" onChange={()=>handleSubmit()} className='todo-btn'><FaPlus /></button>

    </div>


       <div className=''>
      
        {/* YAPILACAK GÖREVLER */}
        
        {

value.map((todo)=>(

<TodoItem key={todo.id} todo={todo} toggle={toggle}  />


))}



        </div> 
        
        </form>
  )
}

export default TodoForm