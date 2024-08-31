import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";


const TodoItem = () => {
  return (
    <div className='w-full bg-blue-300'><FaRegCheckCircle />TodoItem <FaRegTrashAlt /></div>
  )
}

export default TodoItem