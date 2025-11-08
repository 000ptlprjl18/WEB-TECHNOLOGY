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

function Array()
{
  // let arr=[10,20,30];
  const [arr,setArr]=useState([10,20,30]);
  const [count,setCount]=useState(30);
  const add=()=>{
    setCount(count+10);
    setArr([...arr,count+10]);
  }
  
  return(
    <>
      {arr.map((x)=><h2>{x}</h2>)}
      <button onClick={add}>Add</button>
    </>
  );
}

export default App
