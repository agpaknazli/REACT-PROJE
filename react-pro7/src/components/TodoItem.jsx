import React from 'react'
import { FaRegCheckCircle, FaRegTrashAlt,} from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = () => {
  return (
    <div className='bg-primary text-white p-3 d-flex justify-content-center ' style={{ gap: '2rem' }}><FaRegCheckCircle />TodoItem <FaRegTrashAlt /></div>
  )
}

export default TodoItem