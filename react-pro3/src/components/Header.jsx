import React from 'react';
import icon from '../image/icon.jpg';

const Header = () => {
  return (
    <div className='header d-flex'>
        <img className='' src={icon} alt="icon" />
        <h1>Clarusway</h1>
    </div>
  )
}

export default Header;
