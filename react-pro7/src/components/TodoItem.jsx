import React from 'react'
import { FaRegCheckCircle, FaRegTrashAlt,} from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = ({todo, toggle}) => {
 
  return (
    <div  
    className='bg-primary text-white p-3 d-flex justify-content-center select-none' style={{ gap: '2rem'}} onClick={()=>toggle(todo.id)} >
      
      


      
      <FaRegCheckCircle /> <FaRegTrashAlt />
      
      
      {todo.text} 
      
      
      
      </div>




  )
}




export default TodoItem