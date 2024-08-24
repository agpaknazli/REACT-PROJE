import React from 'react'
import "./Header.scss"




const Header = () => {



  const categories= ["All","Electronics", 'Jewelery', "Man's Clothing", "Women's Clothing"]
  return (
    <div>
<h1 className='header'>Product List</h1>

<div className='btnWrapper'>
{
categories.map((category,i)=> <button type='submit' 
className='btn'
key={i}> {category} </button>)


}
</div>

    </div>
  )
}

export default Header