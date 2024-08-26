import React from 'react'
import './Header.scss'

const Header = ({categorieS}) => {
  return (
    <div className='header'>

      <h1>Product List</h1>
      <div className='btnDiv'>
        {
          categorieS.map((a,i) => (
            <button key={i}>{a}</button>
          ))}

      </div>
        
      </div>
  );
}

export default Header