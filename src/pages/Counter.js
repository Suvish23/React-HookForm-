import React from 'react'
import { useCounter } from '../CustomHooks/useCounter'
import { useToggle } from '../CustomHooks/useToggle';

function Counter() {
const [isVisible,toggling] = useToggle();
const {count,increase, decrease, restart} = useCounter();


  return (
    <div>  
{count}
        <button onClick={toggling}>{isVisible ? "Hide": "Show"}</button>
        {isVisible && <h2>Show</h2>}
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={restart}>Restart</button>
    </div>
  )
}

export default Counter