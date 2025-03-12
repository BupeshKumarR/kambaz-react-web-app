import { useState } from "react";
import './lab4.css';
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}
              id="wd-counter-up-click" className="button-up" >Up</button>
      <button onClick={() => setCount(count - 1)}
              id="wd-counter-down-click" className="button-down" >Down</button>
<hr/></div>);}