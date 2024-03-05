"use client"

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1 className='text-3xl'>counter: {counter}</h1>
            <button className="border " onClick={()=>setCounter(counter+1)}>Increse</button>
            <button  className="border " onClick={()=>setCounter(counter-1)}>Decrease</button>
        </div>
    );
};

export default Counter;