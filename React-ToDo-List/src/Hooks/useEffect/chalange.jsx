import React, { useEffect, useState } from 'react';
import './Chalange.css';

export const Chalange = () => {
    const [count , setCount] = useState(0)
    const [name , setName] = useState('')

    useEffect(() => {
       console.log(name)
    },[name])

    useEffect(() =>{
        document.title =`Count : ${count}`
    },[count ])

  return (
    <div className="challenge-container">
      <h1>useEffect Chalange</h1>
      <p>
        Count: <span>{count}</span>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>
        Name: <span>{name}</span>
      </p>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
    </div>
  );
};
