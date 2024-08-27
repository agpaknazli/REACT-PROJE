import React, { useState } from 'react';
import List from './components/List';

function App() {
 
const [number, setNumber] =useState(1);

const prevHandler = () => {
if(number > 4){
  setNumber(prevNumber => prevNumber -5);
}}
const nextHandler = () => {
  if(number < 16){
    setNumber(prevNumber => prevNumber +5);
  }};


  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {number} to {number+4})
        </h5>
        <List number={number}/>
        <div className='btns'>
          <button onClick={prevHandler} disabled={number<=4} >Prev</button>
          <button onClick={nextHandler} disabled={number >=16} >Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
