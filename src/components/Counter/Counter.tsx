"use client"
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex gap-4 justify-center mt-20 items-center">
      <button
        className="border border-white dark:border-slate-800  btn px-4 py-2 rounded-lg "
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <h1 className="text-xl">{counter}</h1>
      <button
        className="border dark:border-slate-800 border-white btn px-4 py-2 rounded-lg"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
