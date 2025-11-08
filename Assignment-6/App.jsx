import "./App.css";
import {useState} from "react";
function Counter(props)
{
  const [count,setCount]=useState(props.val);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }

  const style={
    color:count==0?"black":count<0?"red":"green"
  }
  
  return(
    
    <div className="box">
      <h1>{props.title}</h1>
      <h2>Count :<span style={style}>{count}</span> </h2>
      <button onClick={increment} className="add">Increment</button>
      <button onClick={decrement} className="del">Decrement</button>

    </div>
  );
}
export default App
