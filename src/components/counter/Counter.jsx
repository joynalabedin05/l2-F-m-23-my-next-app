"use client"

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1 className='text-3xl mb-5'>counter: {counter}</h1>
            <button className="btn btn-accent " onClick={()=>setCounter(counter+1)}>Increse</button>
            <button  className="btn btn-accent ml-5"  onClick={()=>setCounter(counter-1)}>Decrease</button>
        </div>
    );
};

export default Counter;