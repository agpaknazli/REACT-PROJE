import React from 'react'
import './Header.scss'

const Header = () => {

  const categories = ['All', 'Electronics', 'Jewelery', 'Men\'s Clothing', 'Women\'s Clothing']

  return (
    <>
      <h1 className='header'>Product List</h1>
      <div className='btnWrapper'>
        {
          categories.map((category, i) => <button type='button' key={i}>{category}</button>)
        }
      </div>
    </>
  )
}

export default Header